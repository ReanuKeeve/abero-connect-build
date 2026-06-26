import factoryExterior from "@/assets/factory-exterior.jpg";
import productionLine from "@/assets/production-line.jpg";
import showroom from "@/assets/showroom.jpg";
import warehouse from "@/assets/warehouse.jpg";
import exhibition from "@/assets/exhibition.jpg";
import qualityControl from "@/assets/quality-control.jpg";
import assembly from "@/assets/assembly.jpg";
import packaging from "@/assets/packaging.jpg";
import office from "@/assets/office.jpg";
import containerLoading from "@/assets/container-loading.jpg";

import realFactory from "@/assets/real-factory-exterior.jpg.asset.json";
import realWarehouse from "@/assets/real-warehouse.jpg.asset.json";
import realShowroom from "@/assets/real-showroom.jpg.asset.json";
import realOffice from "@/assets/real-office.jpg.asset.json";
import realCorridor from "@/assets/real-corridor.jpg.asset.json";
import realEntrance from "@/assets/real-entrance.jpg.asset.json";
import realEntrance2 from "@/assets/real-entrance2.jpg.asset.json";

export const img = {
  factoryExterior: realFactory.url,
  productionLine,
  showroom: realShowroom.url,
  warehouse: realWarehouse.url,
  exhibition,
  qualityControl,
  assembly,
  packaging,
  office: realOffice.url,
  containerLoading,
  corridor: realCorridor.url,
  entrance: realEntrance.url,
  entrance2: realEntrance2.url,
  productDisplay: realShowroom.url,
  genFactory: factoryExterior,
};

export const heroSlides = [
  { src: realFactory.url, title: "Headquarters · Shantou, China", caption: "Shantou · China · World" },
  { src: realShowroom.url, title: "Product Showroom", caption: "Curated toy categories" },
  { src: realWarehouse.url, title: "Warehouse & Product Library", caption: "Export-ready inventory" },
  { src: realOffice.url, title: "Office & Team", caption: "Client & supplier coordination" },
  { src: exhibition, title: "International Trade Fairs", caption: "Hong Kong · Canton · Nuremberg" },
];

export const aboutSlides = [
  { src: realOffice.url, caption: "Office" },
  { src: realCorridor.url, caption: "Office Corridor" },
  { src: realEntrance.url, caption: "Entrance" },
  { src: realShowroom.url, caption: "Showroom" },
  { src: realWarehouse.url, caption: "Warehouse" },
  { src: realFactory.url, caption: "Headquarters" },
  { src: exhibition, caption: "Trade Fair" },
  { src: realEntrance2.url, caption: "Office Entrance" },
];

export const gallerySlides = [
  { src: productionLine, caption: "Production Line" },
  { src: realShowroom.url, caption: "Showroom" },
  { src: realWarehouse.url, caption: "Warehouse" },
  { src: qualityControl, caption: "Quality Check" },
  { src: containerLoading, caption: "Container Loading" },
  { src: exhibition, caption: "Trade Fair" },
  { src: realOffice.url, caption: "Office" },
  { src: realShowroom.url, caption: "Product Display" },
];
