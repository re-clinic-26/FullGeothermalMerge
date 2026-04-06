import { useState } from "react";
import { motion } from "framer-motion";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import { MapPin, Thermometer, Factory, Home } from "lucide-react";

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

interface StateData {
  name: string;
  capacity: string;
  plants: number;
  description: string;
  coords: [number, number];
}

const stateData: Record<string, StateData> = {
  california: {
    name: "California",
    capacity: "2,730 MW",
    plants: 22,
    description: "Home to The Geysers, the largest geothermal field in the world.",
    coords: [-122.4194, 37.7749],
  },
  nevada: {
    name: "Nevada",
    capacity: "735 MW",
    plants: 8,
    description: "Ranks second nationally in geothermal electricity production.",
    coords: [-116.4194, 39.5296],
  },
  utah: {
    name: "Utah",
    capacity: "103 MW",
    plants: 3,
    description: "Rapidly expanding geothermal exploration and development.",
    coords: [-111.8315, 40.5762],
  },
  oregon: {
    name: "Oregon",
    capacity: "550 MW",
    plants: 4,
    description: "Diverse geothermal sites across the state.",
    coords: [-120.5542, 43.8041],
  },
  idaho: {
    name: "Idaho",
    capacity: "400 MW",
    plants: 5,
    description: "Known for high-temperature geothermal reservoirs.",
    coords: [-114.4788, 44.0682],
  },
  hawaii: {
    name: "Hawaii",
    capacity: "38 MW",
    plants: 1,
    description: "Big Island hosts geothermal power plants near volcanic areas.",
    coords: [-155.5828, 19.8968],
  },
};

export function MapSection() {
  const [selectedState, setSelectedState] = useState<string | null>(null);

  const getStateColor = (stateName: string): string => {
    const key = stateName.toLowerCase();
    const state = stateData[key];
    if (!state) return "hsl(var(--muted))";
    
    const capacity = parseInt(state.capacity.replace(/,/g, ""));
    if (capacity > 1000) return "hsl(var(--thermal-hot))";
    if (capacity > 500) return "hsl(var(--thermal-warm))";
    return "hsl(45 93% 70%)"; // Light yellow
  };

  return (
    <div className="space-y-12">
      <section id="map-explore" className="scroll-mt-24">
        <div className="section-badge bg-secondary text-secondary-foreground mb-4">
          CHAPTER 4
        </div>
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
          U.S. Geothermal Hotspots
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
          Explore geothermal energy production across the United States. Click on highlighted 
          states to learn about their geothermal capacity and facilities.
        </p>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Map */}
          <div className="lg:col-span-2 content-card">
            <ComposableMap
              projection="geoAlbersUsa"
              className="w-full h-auto"
            >
              <Geographies geography={geoUrl}>
                {({ geographies }) =>
                  geographies.map((geo) => {
                    const stateName = geo.properties.name;
                    const key = stateName.toLowerCase();
                    const isGeothermal = key in stateData;
                    const isSelected = selectedState === key;

                    return (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill={getStateColor(stateName)}
                        stroke="hsl(var(--background))"
                        strokeWidth={isSelected ? 2 : 0.5}
                        style={{
                          default: {
                            outline: "none",
                            cursor: isGeothermal ? "pointer" : "default",
                          },
                          hover: {
                            outline: "none",
                            fill: isGeothermal ? "hsl(var(--primary))" : getStateColor(stateName),
                          },
                          pressed: {
                            outline: "none",
                          },
                        }}
                        onClick={() => isGeothermal && setSelectedState(key)}
                      />
                    );
                  })
                }
              </Geographies>
              
              {Object.entries(stateData).map(([key, state]) => (
                <Marker
                  key={key}
                  coordinates={state.coords}
                  onClick={() => setSelectedState(key)}
                >
                  <circle
                    r={6}
                    fill="hsl(var(--primary))"
                    stroke="white"
                    strokeWidth={2}
                    className="cursor-pointer animate-pulse-thermal"
                  />
                </Marker>
              ))}
            </ComposableMap>

            {/* Legend */}
            <div className="flex flex-wrap gap-4 mt-4 justify-center">
              <div className="flex items-center gap-2 text-sm">
                <div className="w-4 h-4 rounded bg-thermal-hot" />
                <span>High (&gt;1000 MW)</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-4 h-4 rounded bg-thermal-warm" />
                <span>Medium (500-1000 MW)</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-4 h-4 rounded" style={{ backgroundColor: "hsl(45 93% 70%)" }} />
                <span>Emerging (&lt;500 MW)</span>
              </div>
            </div>
          </div>

          {/* State Info Panel */}
          <div className="space-y-4" id="state-data">
            {selectedState && stateData[selectedState] && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="content-card"
              >
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary font-semibold text-sm">
                    {stateData[selectedState].name}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex flex-col">
                    <span className="text-xs text-muted-foreground uppercase tracking-wide">
                      Capacity
                    </span>
                    <span className="text-2xl font-bold text-thermal-hot">
                      {stateData[selectedState].capacity}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-muted-foreground uppercase tracking-wide">
                      Plants
                    </span>
                    <span className="text-2xl font-bold">
                      {stateData[selectedState].plants}
                    </span>
                  </div>
                </div>

                <div className="p-3 bg-muted/50 rounded-lg">
                  <span className="text-xs font-semibold text-muted-foreground uppercase">
                    Highlight
                  </span>
                  <p className="text-sm font-medium mt-1">
                    {stateData[selectedState].description}
                  </p>
                </div>
              </motion.div>
            )}

            {/* National Overview */}
            <div className="content-card">
              <h3 className="font-serif font-semibold mb-4 text-lg">
                National Overview
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <Thermometer className="w-5 h-5 text-thermal-hot mb-1" />
                  <span className="text-xs text-muted-foreground">Total Capacity</span>
                  <span className="font-bold text-lg">3,700+ MW</span>
                </div>
                <div className="flex flex-col">
                  <Factory className="w-5 h-5 text-muted-foreground mb-1" />
                  <span className="text-xs text-muted-foreground">Operating Plants</span>
                  <span className="font-bold text-lg">60+</span>
                </div>
                <div className="flex flex-col">
                  <MapPin className="w-5 h-5 text-primary mb-1" />
                  <span className="text-xs text-muted-foreground">Active States</span>
                  <span className="font-bold text-lg">7</span>
                </div>
                <div className="flex flex-col">
                  <Home className="w-5 h-5 text-success mb-1" />
                  <span className="text-xs text-muted-foreground">Homes Powered</span>
                  <span className="font-bold text-lg">1M+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MapSection;
