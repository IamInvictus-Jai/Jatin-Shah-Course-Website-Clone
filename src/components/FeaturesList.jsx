import { featuresData } from "../data/featuresData";

// This component renders a single column of features.
const FeatureColumn = ({ features }) => {
  return (
    // The `space-y-3` class automatically adds a 12px margin between each list item.
    <ul className="space-y-3">
      {features.map((feature) => (
        <li key={feature.id} className="flex items-start">
          <img
            src={feature.icon}
            alt="" // Decorative icon
            className="h-6 w-6 mr-3 mt-1 flex-shrink-0"
          />
          <span className="text-white text-lg md:text-xl font-poppins">
            {/* This logic cleanly splits and styles the bolded text. */}
            {feature.text.split("**").map((part, i) =>
              i % 2 === 1 ? (
                <strong key={i} className="font-bold text-lime-300">
                  {part}
                </strong>
              ) : (
                part
              )
            )}
          </span>
        </li>
      ))}
    </ul>
  );
};


export function FeaturesList() {
  return (
    // A single, responsive grid container replaces all the previous wrappers.
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 px-4 py-2">
      {/* Left Column */}
      <FeatureColumn features={featuresData.leftColumn} />

      {/* Right Column */}
      <FeatureColumn features={featuresData.rightColumn} />
    </div>
  );
}