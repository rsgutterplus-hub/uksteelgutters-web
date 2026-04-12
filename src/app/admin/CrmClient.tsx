"use client";
import { useState, useEffect, useCallback, Fragment } from "react";
import { useRouter } from "next/navigation";

interface Account {
  id: string;
  name: string;
  company: string;
  tradeType: string;
  email: string;
  phone: string;
  address: string;
  vatNumber: string;
  newsletter: boolean;
  message: string;
  status: "pending" | "approved" | "rejected";
  discountTier: number;
  notes: string;
  appliedAt: string;
  approvedAt?: string;
}

interface Order {
  id: string;
  customer: string;
  company: string;
  email: string;
  phone: string;
  address: string;
  items: string;
  value: number;
  status: "new" | "processing" | "dispatched" | "delivered" | "issue";
  orderDate: string;
  expectedDelivery: string;
  trackingNumber: string;
  notes: string;
}

const STATUS_LABELS: Record<string, string> = {
  pending: "Pending", approved: "Approved", rejected: "Rejected",
  new: "New", processing: "Processing", dispatched: "Dispatched",
  delivered: "Delivered", issue: "Issue",
};

const STATUS_STYLES: Record<string, string> = {
  pending: "bg-amber-100 text-amber-800",
  approved: "bg-green-100 text-green-800",
  rejected: "bg-red-100 text-red-800",
  new: "bg-blue-100 text-blue-800",
  processing: "bg-amber-100 text-amber-800",
  dispatched: "bg-purple-100 text-purple-800",
  delivered: "bg-green-100 text-green-800",
  issue: "bg-red-100 text-red-800",
};

function Badge({ status }: { status: string }) {
  return (
    <span className={`px-2 py-0.5 rounded text-xs font-medium ${STATUS_STYLES[status] || "bg-gray-100 text-gray-800"}`}>
      {STATUS_LABELS[status] || status}
    </span>
  );
}

const fmtGBP = (v: number) => "\u00a3" + Number(v).toLocaleString("en-GB", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const fmtDate = (d: string) => d ? new Date(d).toLocaleDateString("en-GB") : "\u2014";

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex gap-2 text-xs">
      <span className="text-gray-500 w-20 flex-shrink-0">{label}</span>
      <span className="text-gray-800 font-medium">{value}</span>
    </div>
  );
}

function AccountDetail({ account, onUpdate }: { account: Account; onUpdate: (a: Account) => void }) {
  const [notes, setNotes] = useState(account.notes || "");
  const [discount, setDiscount] = useState(account.discountTier);
  const save = () => onUpdate({ ...account, notes, discountTier: discount });
  const approve = () => onUpdate({ ...account, status: "approved", discountTier: discount, notes, approvedAt: new Date().toISOString() });
  const reject = () => onUpdate({ ...account, status: "rejected", notes });

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5 mt-2">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-1.5">
          <div className="flex items-center gap-2 mb-3">
            <p className="font-semibold text-navy text-sm">{account.company || account.name}</p>
            <Badge status={account.status} />
          </div>
          <Field label="Name" value={account.name} />
          <Field label="Company" value={account.company || "\u2014"} />
          <Field label="Trade" value={account.tradeType} />
          <Field label="Email" value={account.email} />
          <Field label="Phone" value={account.phone} />
          <Field label="Address" value={account.address || "\u2014"} />
          <Field label="VAT" value={account.vatNumber || "\u2014"} />
          <Field label="Applied" value={fmtDate(account.appliedAt)} />
          <Field label="Newsletter" value={account.newsletter ? "Yes" : "No"} />
          {account.message && (
            <div className="mt-3 p-3 bg-gray-50 rounded-lg text-xs text-gray-600">{account.message}</div>
          )}
        </div>
        <div className="space-y-3">
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">Discount tier</label>
            <select value={discount} onChange={e => setDiscount(Number(e.target.value))} className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-gold">
              <option value={0}>No discount</option>
              <option value={5}>5%</option>
              <option value={10}>10%</option>
              <option value={15}>15%</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">Internal notes</label>
            <textarea value={notes} onChange={e => setNotes(e.target.value)} rows={4} className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-gold resize-none" placeholder="Add notes..." />
          </div>
          <div className="flex gap-2 flex-wrap">
            <button onClick={save} className="px-4 py-2 bg-navy text-white rounded-lg text-xs font-medium hover:bg-opacity-90">Save</button>
            {account.status === "pending" && (
              <>
                <button onClick={approve} className="px-4 py-2 bg-green-600 text-white rounded-lg text-xs font-medium">Approve</button>
                <button onClick={reject} className="px-4 py-2 bg-red-600 text-white rounded-lg text-xs font-medium">Reject</button>
              </>
            )}
            {account.status === "approved" && <button onClick={reject} className="px-4 py-2 bg-red-600 text-white rounded-lg text-xs font-medium">Revoke</button>}
            {account.status === "rejected" && <button onClick={approve} className="px-4 py-2 bg-green-600 text-white rounded-lg text-xs font-medium">Re-approve</button>}
          </div>
        </div>
      </div>
    </div>
  );
}

function OrderDetail({ order, onUpdate }: { order: Order; onUpdate: (o: Order) => void }) {
  const [status, setStatus] = useState(order.status);
  const [tracking, setTracking] = useState(order.trackingNumber || "");
  const [notes, setNotes] = useState(order.notes || "");
  const [delivery, setDelivery] = useState(order.expectedDelivery || "");
  const save = () => onUpdate({ ...order, status, trackingNumber: tracking, notes, expectedDelivery: delivery });

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5 mt-2">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-1.5">
          <p className="font-semibold text-navy text-sm mb-3">{order.company || order.customer} \u2014 {fmtGBP(order.value)}</p>
          <Field label="Customer" value={order.customer} />
          <Field label="Company" value={order.company || "\u2014"} />
          <Field label="Email" value={order.email} />
          <Field label="Phone" value={order.phone} />
          <Field label="Address" value={order.address || "\u2014"} />
          <Field label="Ordered" value={fmtDate(order.orderDate)} />
          {order.items && <div className="mt-3 p-3 bg-gray-50 rounded-lg text-xs text-gray-600">{order.items}</div>}
        </div>
        <div className="space-y-3">
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">Status</label>
            <select value={status} onChange={e => setStatus(e.target.value as Order["status"])} className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-gold">
              {["new","processing","dispatched","delivered","issue"].map(s => <option key={s} value={s}>{STATUS_LABELS[s]}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">Expected delivery</label>
            <input type="date" value={delivery} onChange={e => setDelivery(e.target.value)} className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-gold" />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">Tracking number</label>
            <input value={tracking} onChange={e => setTracking(e.target.value)} placeholder="e.g. XPN12345678GB" className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-gold" />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">Notes</label>
            <textarea value={notes} onChange={e => setNotes(e.target.value)} rows={3} className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-gold resize-none" />
          </div>
          <button onClick={save} className="w-full py-2 bg-navy text-white rounded-lg text-sm font-medium hover:bg-opacity-90">Save changes</button>
        </div>
      </div>
    </div>
  );
}

function TradeAccounts({ accounts, onUpdate, onAdd }: { accounts: Account[]; onUpdate: (a: Account) => void; onAdd: (a: Account) => void }) {
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<Account | null>(null);
  const [adding, setAdding] = useState(false);
  const [form, setForm] = useState({ name: "", company: "", tradeType: "Builder / Main Contractor", email: "", phone: "", address: "", vatNumber: "", newsletter: true, message: "" });

  const shown = accounts.filter(a =>
    (filter === "all" || a.status === filter) &&
    (!search || (a.name + a.company + a.email).toLowerCase().includes(search.toLowerCase()))
  );

  const textFields: [string, keyof typeof form][] = [["Name *","name"],["Company *","company"],["Email *","email"],["Phone","phone"],["Address","address"],["VAT number","vatNumber"]];

  function handleAdd() {
    onAdd({ ...form, id: "ta" + Date.now(), status: "pending", discountTier: 0, notes: "", appliedAt: new Date().toISOString() });
    setAdding(false);
    setForm({ name: "", company: "", tradeType: "Builder / Main Contractor", email: "", phone: "", address: "", vatNumber: "", newsletter: true, message: "" });
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div className="flex gap-2 flex-wrap">
          {["all","pending","approved","rejected"].map(f => (
            <button key={f} onClick={() => { setFilter(f); setSelected(null); }} className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${filter === f ? "bg-navy text-white" : "bg-white text-gray-600 border border-gray-200"}`}>
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>
        <div className="flex gap-2">
          <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search..." className="border border-gray-200 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:border-gold w-40" />
          <button onClick={() => setAdding(!adding)} className="px-3 py-1.5 bg-gold text-navy rounded-lg text-sm font-medium">{adding ? "Cancel" : "+ Add"}</button>
        </div>
      </div>

      {adding && (
        <div className="bg-white rounded-xl border border-gray-100 p-5">
          <p className="font-semibold text-sm text-navy mb-4">New trade account</p>
          <div className="grid grid-cols-2 gap-4">
            {textFields.map(([label, key]) => (
              <div key={key}>
                <label className="block text-xs font-medium text-gray-600 mb-1">{label}</label>
                <input value={form[key] as string} onChange={e => setForm(f => ({ ...f, [key]: e.target.value }))} className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-gold" />
              </div>
            ))}
          </div>
          <div className="mt-3">
            <label className="block text-xs font-medium text-gray-600 mb-1">Trade type</label>
            <select value={form.tradeType} onChange={e => setForm(f => ({ ...f, tradeType: e.target.value }))} className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-gold">
              {["Builder / Main Contractor","Roofer","Guttering Specialist","Plumber","Architect / Designer","Property Developer","Housing Association / Local Authority","Other Trade"].map(t => <option key={t}>{t}</option>)}
            </select>
          </div>
          <button onClick={handleAdd} className="mt-4 px-6 py-2 bg-gold text-navy font-medium rounded-lg text-sm">Save account</button>
        </div>
      )}

      <div className="bg-white rounded-xl border border-gray-100 overflow-x-auto">
        <table className="w-full text-sm" style={{ tableLayout: "fixed", minWidth: 700 }}>
          <thead className="bg-gray-50 border-b border-gray-100">
            <tr>
              {[["Company","160px"],["Email","190px"],["Trade type","155px"],["Applied","90px"],["Disc.","60px"],["Status","95px"],["  ","50px"]].map(([h,w]) => (
                <th key={h} className="text-left px-4 py-3 font-medium text-xs text-gray-500" style={{ width: w }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {shown.length === 0 ? (
              <tr><td colSpan={7} className="text-center py-8 text-sm text-gray-400">No accounts found</td></tr>
            ) : shown.map(a => (
              <Fragment key={a.id}>
                <tr
                  className={`border-t border-gray-50 cursor-pointer hover:bg-gray-50 transition-colors ${selected?.id === a.id ? "bg-gray-50" : ""}`}
                  onClick={() => setSelected(selected?.id === a.id ? null : a)}
                >
                  <td className="px-4 py-3 font-medium text-navy overflow-hidden text-ellipsis whitespace-nowrap">{a.company || "\u2014"}</td>
                  <td className="px-4 py-3 text-gray-600 text-xs overflow-hidden text-ellipsis whitespace-nowrap">{a.email}</td>
                  <td className="px-4 py-3 text-gray-500 text-xs overflow-hidden text-ellipsis whitespace-nowrap">{a.tradeType}</td>
                  <td className="px-4 py-3 text-gray-500 text-xs">{fmtDate(a.appliedAt)}</td>
                  <td className="px-4 py-3 text-sm">{a.discountTier > 0 ? `${a.discountTier}%` : "\u2014"}</td>
                  <td className="px-4 py-3"><Badge status={a.status} /></td>
                  <td className="px-4 py-3 text-xs text-gray-400">{selected?.id === a.id ? "\u2191 close" : "open \u2192"}</td>
                </tr>
                {selected?.id === a.id && (
                  <tr>
                    <td colSpan={7} className="px-4 pb-4 bg-gray-50">
                      <AccountDetail account={selected} onUpdate={acc => { onUpdate(acc); setSelected(acc); }} />
                    </td>
                  </tr>
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Orders({ orders, onUpdate, onAdd }: { orders: Order[]; onUpdate: (o: Order) => void; onAdd: (o: Order) => void }) {
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<Order | null>(null);
  const [adding, setAdding] = useState(false);
  const [form, setForm] = useState({ customer: "", company: "", email: "", phone: "", address: "", items: "", value: "", expectedDelivery: "", notes: "" });

  const shown = orders.filter(o =>
    (filter === "all" || o.status === filter) &&
    (!search || (o.customer + o.company + o.email).toLowerCase().includes(search.toLowerCase()))
  );

  const textFields: [string, keyof typeof form, string][] = [["Customer *","customer","text"],["Company","company","text"],["Email","email","email"],["Phone","phone","text"],["Value (\u00a3) *","value","number"],["Expected delivery","expectedDelivery","date"]];

  function handleAdd() {
    onAdd({ ...form, id: "ord" + Date.now(), status: "new", orderDate: new Date().toISOString(), trackingNumber: "", value: Number(form.value) || 0 });
    setAdding(false);
    setForm({ customer: "", company: "", email: "", phone: "", address: "", items: "", value: "", expectedDelivery: "", notes: "" });
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div className="flex gap-2 flex-wrap">
          {["all","new","processing","dispatched","delivered","issue"].map(f => (
            <button key={f} onClick={() => { setFilter(f); setSelected(null); }} className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${filter === f ? "bg-navy text-white" : "bg-white text-gray-600 border border-gray-200"}`}>
              {f === "all" ? "All" : STATUS_LABELS[f]}
            </button>
          ))}
        </div>
        <div className="flex gap-2">
          <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search..." className="border border-gray-200 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:border-gold w-40" />
          <button onClick={() => setAdding(!adding)} className="px-3 py-1.5 bg-gold text-navy rounded-lg text-sm font-medium">{adding ? "Cancel" : "+ Add"}</button>
        </div>
      </div>

      {adding && (
        <div className="bg-white rounded-xl border border-gray-100 p-5">
          <p className="font-semibold text-sm text-navy mb-4">New order</p>
          <div className="grid grid-cols-2 gap-4">
            {textFields.map(([label, key, type]) => (
              <div key={key}>
                <label className="block text-xs font-medium text-gray-600 mb-1">{label}</label>
                <input type={type} value={form[key]} onChange={e => setForm(f => ({ ...f, [key]: e.target.value }))} className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-gold" />
              </div>
            ))}
          </div>
          <div className="mt-3">
            <label className="block text-xs font-medium text-gray-600 mb-1">Delivery address</label>
            <input value={form.address} onChange={e => setForm(f => ({ ...f, address: e.target.value }))} className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-gold" />
          </div>
          <div className="mt-3">
            <label className="block text-xs font-medium text-gray-600 mb-1">Items ordered</label>
            <textarea value={form.items} onChange={e => setForm(f => ({ ...f, items: e.target.value }))} rows={2} className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-gold resize-none" placeholder="e.g. Gutter 125mm \u00d7 20m, Brackets \u00d7 30..." />
          </div>
          <button onClick={handleAdd} className="mt-4 px-6 py-2 bg-gold text-navy font-medium rounded-lg text-sm">Save order</button>
        </div>
      )}

      <div className="bg-white rounded-xl border border-gray-100 overflow-x-auto">
        <table className="w-full text-sm" style={{ tableLayout: "fixed", minWidth: 750 }}>
          <thead className="bg-gray-50 border-b border-gray-100">
            <tr>
              {[["Customer","155px"],["Items","220px"],["Value","90px"],["Delivery","95px"],["Tracking","130px"],["Status","95px"],["  ","55px"]].map(([h,w]) => (
                <th key={h} className="text-left px-4 py-3 font-medium text-xs text-gray-500" style={{ width: w }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {shown.length === 0 ? (
              <tr><td colSpan={7} className="text-center py-8 text-sm text-gray-400">No orders found</td></tr>
            ) : shown.map(o => (
              <Fragment key={o.id}>
                <tr
                  className={`border-t border-gray-50 cursor-pointer hover:bg-gray-50 transition-colors ${selected?.id === o.id ? "bg-gray-50" : ""}`}
                  onClick={() => setSelected(selected?.id === o.id ? null : o)}
                >
                  <td className="px-4 py-3 overflow-hidden">
                    <p className="font-medium text-navy text-ellipsis overflow-hidden whitespace-nowrap">{o.company || o.customer}</p>
                    <p className="text-xs text-gray-400">{fmtDate(o.orderDate)}</p>
                  </td>
                  <td className="px-4 py-3 text-xs text-gray-500 overflow-hidden text-ellipsis whitespace-nowrap">{o.items}</td>
                  <td className="px-4 py-3 font-medium text-navy">{fmtGBP(o.value)}</td>
                  <td className="px-4 py-3 text-xs text-gray-500">{o.expectedDelivery || "\u2014"}</td>
                  <td className="px-4 py-3 text-xs text-gray-400 overflow-hidden text-ellipsis whitespace-nowrap">{o.trackingNumber || "\u2014"}</td>
                  <td className="px-4 py-3"><Badge status={o.status} /></td>
                  <td className="px-4 py-3 text-xs text-gray-400">{selected?.id === o.id ? "\u2191 close" : "edit \u2192"}</td>
                </tr>
                {selected?.id === o.id && (
                  <tr>
                    <td colSpan={7} className="px-4 pb-4 bg-gray-50">
                      <OrderDetail order={selected} onUpdate={ord => { onUpdate(ord); setSelected(ord); }} />
                    </td>
                  </tr>
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Dashboard({ accounts, orders }: { accounts: Account[]; orders: Order[] }) {
  const pending = accounts.filter(a => a.status === "pending").length;
  const approved = accounts.filter(a => a.status === "approved").length;
  const active = orders.filter(o => o.status !== "delivered").length;
  const total = orders.reduce((s, o) => s + Number(o.value), 0);
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Pending applications", value: pending, color: "text-amber-700" },
          { label: "Approved accounts", value: approved, color: "text-green-700" },
          { label: "Active orders", value: active, color: "text-blue-700" },
          { label: "Total order value", value: fmtGBP(total), color: "text-navy" },
        ].map(s => (
          <div key={s.label} className="bg-white rounded-xl border border-gray-100 p-4">
            <p className="text-xs text-gray-500 mb-1">{s.label}</p>
            <p className={`text-2xl font-bold ${s.color}`}>{s.value}</p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white rounded-xl border border-gray-100 p-5">
          <h3 className="font-semibold text-navy text-sm mb-3">Recent applications</h3>
          {accounts.length === 0 ? <p className="text-sm text-gray-400 text-center py-4">No accounts yet</p> :
            accounts.slice(0, 6).map(a => (
              <div key={a.id} className="flex items-center justify-between py-2 border-t border-gray-50 first:border-0">
                <div>
                  <p className="text-sm font-medium text-navy">{a.company || a.name}</p>
                  <p className="text-xs text-gray-400">{a.tradeType}</p>
                </div>
                <Badge status={a.status} />
              </div>
            ))
          }
        </div>
        <div className="bg-white rounded-xl border border-gray-100 p-5">
          <h3 className="font-semibold text-navy text-sm mb-3">Recent orders</h3>
          {orders.length === 0 ? <p className="text-sm text-gray-400 text-center py-4">No orders yet</p> :
            orders.slice(0, 6).map(o => (
              <div key={o.id} className="flex items-center justify-between py-2 border-t border-gray-50 first:border-0">
                <div>
                  <p className="text-sm font-medium text-navy">{o.company || o.customer}</p>
                  <p className="text-xs text-gray-400">{fmtGBP(o.value)}</p>
                </div>
                <Badge status={o.status} />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default function CrmClient() {
  const [tab, setTab] = useState<"dashboard" | "accounts" | "orders">("dashboard");
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    Promise.all([
      fetch("/api/admin/accounts").then(r => r.json()).catch(() => []),
      fetch("/api/admin/orders").then(r => r.json()).catch(() => []),
    ]).then(([accs, ords]) => {
      setAccounts(Array.isArray(accs) ? accs : []);
      setOrders(Array.isArray(ords) ? ords : []);
      setLoading(false);
    });
  }, []);

  const updateAccount = useCallback((account: Account) => {
    setAccounts(prev => prev.map(a => a.id === account.id ? account : a));
    fetch("/api/admin/accounts", { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(account) });
  }, []);

  const addAccount = useCallback((account: Account) => {
    setAccounts(prev => [account, ...prev]);
    fetch("/api/admin/accounts", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(account) });
  }, []);

  const updateOrder = useCallback((order: Order) => {
    setOrders(prev => prev.map(o => o.id === order.id ? order : o));
    fetch("/api/admin/orders", { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(order) });
  }, []);

  const addOrder = useCallback((order: Order) => {
    setOrders(prev => [order, ...prev]);
    fetch("/api/admin/orders", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(order) });
  }, []);

  async function handleLogout() {
    await fetch("/api/admin/auth", { method: "DELETE" });
    router.push("/admin/login");
  }

  const pending = accounts.filter(a => a.status === "pending").length;
  const active = orders.filter(o => o.status !== "delivered").length;

  if (loading) {
    return <div className="fixed inset-0 bg-gray-50 flex items-center justify-center z-50"><p className="text-gray-500 text-sm">Loading CRM...</p></div>;
  }

  return (
    <div className="fixed inset-0 bg-gray-50 overflow-y-auto z-50">
      {/* Admin header */}
      <div className="bg-navy text-white px-6 py-3 flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 bg-gold rounded flex items-center justify-center font-bold text-navy text-xs">UK</div>
          <div>
            <p className="font-bold text-sm leading-none">UKSteelGutters</p>
            <p className="text-xs text-gray-400 leading-none mt-0.5">Admin CRM</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <p className="text-xs text-gray-400 hidden sm:block">{pending} pending \u00b7 {active} active orders</p>
          <button onClick={handleLogout} className="text-xs text-gray-400 hover:text-white transition-colors">Sign out</button>
        </div>
      </div>

      {/* Tab nav */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 flex gap-1">
          {(["dashboard", "accounts", "orders"] as const).map(t => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                tab === t ? "border-gold text-navy" : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              {t === "dashboard" ? "Dashboard" : t === "accounts" ? "Trade Accounts" : "Orders & Deliveries"}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        {tab === "dashboard" && <Dashboard accounts={accounts} orders={orders} />}
        {tab === "accounts" && <TradeAccounts accounts={accounts} onUpdate={updateAccount} onAdd={addAccount} />}
        {tab === "orders" && <Orders orders={orders} onUpdate={updateOrder} onAdd={addOrder} />}
      </main>
    </div>
  );
}
