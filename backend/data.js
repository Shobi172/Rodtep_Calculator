const TariffItem = require("./models/TariffItem");

const items = [
  {
    hsnCode: "0301",
    description: "LIVE FISH Ornamental Fish",
    rodtepRate: "0.5%",
    uqc: "Kg",
    cap: "",
  },
  {
    hsnCode: "03011100",
    description: "Freshwater",
    rodtepRate: "0.5%",
    uqc: "Kg",
    cap: "",
  },
  {
    hsnCode: "203011900",
    description: "Other Live Fish",
    rodtepRate: "0.5%",
    uqc: "Kg",
    cap: "",
  },
  {
    hsnCode: "03019100",
    description:
      "Trout (Salmo trutta, Oncorhynchus mykiss, Oncorhynchus clarki, Oncorhynchus aguabonita, Oncorhynchus gilae, Oncorhynchus apache and Oncorhynchus chrysogaster)",
    rodtepRate: "0.5%",
    uqc: "Kg",
    cap: "",
  },
  {
    hsnCode: "03019200",
    description: "Eels (Anguilla spp.)",
    rodtepRate: "0.5%",
    uqc: "Kg",
    cap: "",
  },
  {
    hsnCode: "03019300",
    description:
      "Carp (Cyprinus spp., Carassius spp., Ctenopharyngodon idellus,Hypophthalmichthys spp., Cirrhinus spp., Mylopharyngodon piceus, Catla catla, Labeo spp., Osteochilus hasselti, Leptobarbus hoeveni, Megalobrama spp.",
    rodtepRate: "0.5%",
    uqc: "Kg",
    cap: "",
  },
  {
    hsnCode: "603019400",
    description: "Atlantic and PacficBluefin tunas (Thunnus thynnus)",
    rodtepRate: "2.5%",
    uqc: "Kg",
    cap: "16",
  },
  {
    hsnCode: "703019500",
    description: "Southern bluefin tunas (Thunnus maccoyii)",
    rodtepRate: "2.5%",
    uqc: "Kg",
    cap: "16",
  },
  {
    hsnCode: "803019900",
    description:
      "Other0.5%Kg 0302FISH, FRESH OR CHILLED, EXCLUDING FISH FILLETS AND OTHER FISH MEAT OF HEADING 0304 Salmonidae, excluding edible fish offal of sub-headings 0302 91 to 0302 99",
    rodtepRate: "0.5%",
    uqc: "Kg",
    cap: "",
  },
  {
    hsnCode: "903021100",
    description:
      "Trout (Salmo trutta, Oncorhynchus mykiss, Oncorhynchus clarki, Oncorhynchus aguabonita, Oncorhynchus gilae, Oncorhynchus apache and Oncorhynchus chrysogaster)",
    rodtepRate: "0.5%",
    uqc: "Kg",
    cap: "",
  },
  {
    hsnCode: "1003021300",
    description:
      "Pacific Salmon (Oncorhynchus nerka, Oncorhynchus gorbuscha,Oncorhynchus keta, Oncorhynchus tschawytscha, Oncorhynchus kisutch, Oncorhynchus masou and Oncorhynchus rhodurus)",
    rodtepRate: "0.5%",
    uqc: "Kg",
    cap: "",
  },
  {
    hsnCode: "1103021400",
    description:
      "Atlantic salmon (Salmo salar) and Danube salmon (Hucho hucho)",
    rodtepRate: "2.5%",
    uqc: "Kg",
    cap: "16",
  },
  {
    hsnCode: "1203021900",
    description:
      "Other2.5%Kg16 Flat fish (Pleuronectidae, Bothidae, Cynoglossidae, Soleidae, Scophthalmidae and Citharidae) excluding edible fish offal of sub-headings 030291 to 030199:",
    rodtepRate: "2.5%",
    uqc: "Kg",
    cap: "16",
  },
  {
    hsnCode: "1303022100",
    description:
      "Halibut (Reinhardtius hippoglossoides, Hippoglossus hippoglossus, Hippoglossus stenolepis)",
    rodtepRate: "2.5%",
    uqc: "Kg",
    cap: "16",
  },
];

TariffItem.insertMany(items)
  .then(() => {
    console.log("Tariff items saved successfully.");
  })
  .catch((error) => {
    console.error("Error saving tariff items:", error);
  });
