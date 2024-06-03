"use client"
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api"

export function GoogleMaps() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY as string,
  })
  const center = { lat: -20.338101381686847, lng: -40.30565180458265 }

  return (
    <div className="w-full h-full mb-16 rounded-lg">
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={{ width: "100%", height: "100%", borderRadius: "24px" }}
          center={center}
          zoom={15}
          clickableIcons={false}
          options={{
            scaleControl: false,
            mapTypeControl: false,
            panControl: false,
            rotateControl: false,
            fullscreenControl: false,
          }}
        >
          <Marker position={center} />
        </GoogleMap>
      ) : (
        <></>
      )}
    </div>
  )
}
