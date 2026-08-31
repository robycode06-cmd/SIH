import { useEffect, useRef } from "react";
import * as maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

const Map = ({setFirePannel}) => {
  const mapContainer = useRef(null);

  useEffect(() => {
    const map = new maplibregl.Map({
    container: mapContainer.current,


      // Start at India
      center: [78.9629, 20.5937],
      zoom: 4.5,
      style: `https://api.maptiler.com/maps/hybrid/style.json?key=${
        import.meta.env.VITE_MAPTILER_KEY
      }`
    });

    // Show only country and state labels, hiding more detailed local labels (cities, roads, POIs) to keep it clean
    map.on("style.load", () => {
      const layers = map.getStyle().layers;
      layers.forEach((layer) => {
        if (layer.type === "symbol") {
          const id = layer.id.toLowerCase();
          const keepLabel = id.includes("country") || id.includes("state");
          if (!keepLabel) {
            map.setLayoutProperty(layer.id, "visibility", "none");
          }
        }
      });
    });

    // Zoom buttons
    map.addControl(new maplibregl.NavigationControl());

    // Add marker at midpoint of India
    new maplibregl.Marker({ color: "red" })
      .setLngLat([78.9629, 20.5937])
      .addTo(map)
      .getElement()
      .addEventListener("click", () => {
        setFirePannel(true)
      });

    return () => {
      map.remove();
    };


  }, []);



  return (
    <div
      ref={mapContainer}
      style={{
        width: "100%",
        height: "100vh"
    }}
    // onClick={()=>{
    //   setFirePannel(true)
    // }}
    />
  );
};

export default Map;