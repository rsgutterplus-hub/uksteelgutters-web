import { colorOptions } from "@/data/products";

interface ColorSwatchesProps {
  range: string;
}

export default function ColorSwatches({ range }: ColorSwatchesProps) {
  const colors = colorOptions[range] || [];

  return (
    <div>
      <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-3">
        Available Colours — {range} Range
      </h3>
      <div className="flex flex-wrap gap-2">
        {colors.map((color) => (
          <div key={color.name} className="group relative">
            <div
              className="w-8 h-8 rounded-full border-2 border-gray-200 hover:border-gold transition-colors cursor-pointer"
              style={{ backgroundColor: color.hex }}
              title={color.name}
            />
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-navy text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
              {color.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
