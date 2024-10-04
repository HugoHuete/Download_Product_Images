let div_number = 1;
let miniatures;

// Cambiar el ... por %E2%80%A6
var dictionary = {
  "https://us.shein.com/SHEIN-Swim-Summer-Beach-Rib-Triangle-High-Cut-Bikini-p-2659566.html":
    "5654-T2 - S, 5654-T3 - M, 5654-T4 - L - $14",
  "https://us.shein.com/SHEIN-Swim-Basics-Summer-Beach-3packs-Underwire-Bikini-Set-Mesh-Beach-Skirt-p-1732736.html":
    "5656-T2 - S, 5656-T3 - M, 5656-T4 - L - $22",
  "https://us.shein.com/SHEIN-Swim-Summer-Beach-3packs-Rib-Underwire-Bikini-Set-Beach-Skirt-Matching-Set-p-2462750.html":
    "5655-T2 - S, 5655-T3 - M, 5655-T4 - L - $22",
  "https://us.shein.com/Summer-Beach-Binding-Trim-Triangle-Bikini-p-10082165.html":
    "5650-T2 - S, 5650-T3 - M - $16",
  "https://us.shein.com/SHEIN-Swim-Summer-Beach-Drawstring-Bandeau-Bikini-Set-p-16609375.html":
    "5648-T2 - S, 5648-T4 - L - $14",
  "https://us.shein.com/SHEIN-Swim-Summer-Beach-Mono-Bikini-Set-Drawstrin%E2%80%A6Cut-Bikini-Bottom-2-Pieces-Bikini-p-10619115.html":
    "5646-T2 - S, 5646-T3 - M, 5646-T4 - L - $14",
  "https://us.shein.com/SHEIN-Swim-Mod-Summer-Beach-Drawstring-Bandeau-Bikini-Set-p-16554571.html":
    "5649-T2 - S, 5649-T3 - M, 5649-T4 - L - $14",
  "https://us.shein.com/SHEIN-Swim-Summer-Beach-Drawstring-Bandeau-Bikini-Set-p-18272834.html":
    "5647-T2 - S, 5647-T3 - M, 5647-T4 - L - $14",
  "https://us.shein.com/Women-s-One-Piece-Swimsuit-Sexy-Asymmetric-Plain-p-20845037.html":
    "5643-T2 - S, 5643-T3 - M - $17",
  "https://us.shein.com/Women-s-One-Piece-Swimsuit-Sexy-Monokini-With-Single-Shoulder-Design-And-Plain-p-20845043.html":
    "5644-T2 - S, 5644-T3 - M - $17",
  "https://us.shein.com/Women-s-One-Piece-Sexy-Plain-Monokini-Swimsuit-With-Single-Shoulder-Strap-p-21548912.html":
    "5645-T2 - S, 5645-T3 - M - $17",
  "https://us.shein.com/SHEIN-Swim-Summer-Beach-Hollow-Out-Crochet-Crop-Cover-Up-Top-Without-Bra-p-13933788.html":
    "5632-T2 - S, 5632-T3 - M - $13",
  "https://us.shein.com/SHEIN-Swim-Summer-Beach-Hollow-Out-Crochet-Crop-Cover-Up-Without-Bra-p-15053742.html":
    "5633-T2 - S, 5633-T3 - M - $13",
  "https://us.shein.com/SHEIN-Swim-Drop-Shoulder-Bell-Sleeve-Perforated-Knit-Crop-Cover-Up-p-36792510.html":
    "5634-T2 - S, 5634-T3 - M - $16",
  "https://us.shein.com/SHEIN-Swim-Summer-Beach-Ladies-Hollow-Out-Drop-Sh%E2%80%A6ng-Sleeve-Crop-Loose-Cover-Up-Top-p-30526917.html":
    "5635-T2 - S, 5635-T3 - M, 5635-T4 - L - $13",
  "https://us.shein.com/SHEIN-Swim-Summer-Beach-Women-Solid-Color-Simple-Daily-Hollow-Out-Cover-Up-p-33497233.html":
    "5636-T2 - S, 5636-T3 - M - $16",
  "https://us.shein.com/SHEIN-Dreamara-Vacation-Casual-Sexy-Cut-Out-Waist-Strap-Textured-Fabric-p-36010886.html":
    "5637-T2 - S, 5637-T3 - M - $21",
  "https://us.shein.com/SHEIN-WYWH-Vacation-Casual-Personality-Hollow-Out%E2%80%A6red-Fabric-Solid-Color-Slip-Dress-p-40534161.html":
    "5638-T2 - S, 5638-T3 - M - $21",
  "https://us.shein.com/SHEIN-Swim-Vcay-Summer-Beach-Hollow-Out-Crochet-Cover-Up-Pants-p-14629336.html":
    "5639-T2 - S, 5639-T3 - M, 5639-T4 - L - $18",
  "https://us.shein.com/SHEIN-Swim-Summer-Beach-Solid-Drop-Shoulder-Cover-Up-Top-p-16478469.html":
    "5640-T0 - Unitalla - $16",
  "https://us.shein.com/MUSERA-Women-Solid-Color-Deep-V-Neck-Sexy-Sling-One-Piece-Swimsuit-p-34011272.html":
    "5641-T2 - S, 5641-T3 - M, 5641-T4 - L - $18",
  "https://us.shein.com/MUSERA-Deep-V-Neck-Solid-Backless-Sexy-One-Piece-Swimsuit-p-35086776.html":
    "5642-T2 - S, 5642-T3 - M, 5642-T4 - L - $18",
  "https://us.shein.com/SHEIN-Swim-Summer-Beach-Ladies-Solid-Color-Hollow-Out-Back-One-Piece-Swimsuit-p-30941371.html":
    "5651-T2 - S, 5651-T3 - M, 5651-T4 - L - $18",
  "https://us.shein.com/SHEIN-Swim-Women-s-Solid-Color-Backless-One-Piece%E2%80%A6t-For-Beach-Vacation-Summer-Beach-p-34287061.html":
    "5652-T2 - S, 5652-T3 - M, 5652-T4 - L - $18",
  "https://us.shein.com/SHEIN-Swim-Summer-Beach-Rib-Triangle-High-Cut-Bikini-Set-p-15116902.html":
    "5653-T2 - S, 5653-T3 - M, 5653-T4 - L - $14",
  "https://us.shein.com/Women-s-Summer-Solid-Color-Beach-Swimsuit-Set-p-41555801.html":
    "5657-T2 - S, 5657-T3 - M - $20",
  "https://us.shein.com/Women-s-Solid-Color-Ruched-Sexy-Bikini-Set-For-Summer-Beach-p-36944674.html":
    "5658-T2 - S, 5658-T3 - M - $20",
  "https://us.shein.com/3D-Flower-Decor-Colorblock-Ladies-Halter-Neck-One-Piece-Swimsuit-p-32231025.html":
    "5659-T2 - S, 5659-T3 - M, 5659-T4 - L - $20",
  "https://us.shein.com/European-And-American-Sexy-Color-Block-Bikini-Set-For-Women-p-36845766.html":
    "5660-T2 - S, 5660-T3 - M, 5660-T4 - L - $18",
};

// Encontrar el div que corresponde a las miniaturas
while (div_number < 50) {
  console.log(`Probando div_number: ${div_number}`);
  miniatures = document.evaluate(
    `/html/body/div[${div_number}]/div/div/div[2]/div/div[1]/ul/li`,
    document,
    null,
    XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
    null
  );

  if (miniatures.snapshotLength < 1) {
    div_number += 1;
    continue;
  }

  console.log(`Success! div_number: ${div_number}`);
  break;
}
let image_path = `/html/body/div[${div_number}]/div/div/div[2]/div/div[2]/div[1]/img`;

for (let i = 0; i < miniatures.snapshotLength; i++) {
  // Clickear cada miniatura para cambiar la imagen grande
  miniatures.snapshotItem(i).click();
  await sleep(1000);

  const element = getElementByXpath(image_path);

  try {
    console.log(`Link: ${element.src}`);
  } catch (error) {
    image_path = `/html/body/div[${div_number}]/div/div/div[2]/div/div[2]/div[2]/img`;
    continue;
  }

  await fetch(element.src, { mode: "cors" })
    .then((response) => response.blob())
    .then((blob) => {
      // Crear un enlace temporal para descargar el blob
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      const image_name = dictionary[document.URL];
      a.href = url;
      a.download = `${image_name} (${i}).webp`; // Nombre del archivo
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a); // Remover el enlace después de hacer clic
      URL.revokeObjectURL(url); // Limpiar el objeto URL temporal
    })
    .catch((err) => console.error("Error al descargar la imagen:", err));
}

//-----------------------------------------------------------------------------------------------
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function getElementByXpath(path) {
  return document.evaluate(
    path,
    document,
    null,
    XPathResult.FIRST_ORDERED_NODE_TYPE,
    null
  ).singleNodeValue;
}
