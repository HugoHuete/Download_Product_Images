let div_number = 1;
let miniatures;

// Cambiar el … por %E2%80%A6
var dictionary = {
  'https://us.shein.com/Comfortcana-Plus-Size-Short-Sleeve-Fruit-Cherry-Print-Summer-Vacation-Shirt-p-31655933.html': '0001-T1 - XL, 0001-T2 - 1XL - C$0',
'https://us.shein.com/Comfortcana-Plus-Size-Cherry-Print-Round-Neck-Short-Sleeve-Casual-T-Shirt-p-37693558.html': '0002-T2 - 1XL, 0002-T3 - 2XL - C$0',
'https://us.shein.com/SHEIN-SunnyBelle-Plus-Size-Summer-Casual-Vacation%E2%80%A6kirt-Vacation-Beach-Outfits-Women-p-32575337.html': '0003-T2 - 1XL, 0003-T3 - 2XL - C$0',
'https://us.shein.com/SHEIN-SunnyBelle-Plus-Size-Women-Summer-Solid-Col%E2%80%A6egant-Dress-Vacation-Beach-Outfit-p-34015108.html': '0004-T2 - 1XL, 0004-T3 - 2XL - C$0',
'https://us.shein.com/SHEIN-ICON-Plus-Size-Women-Burgundy-Oblique-Collar-Long-Sleeve-Knit-Top-p-46843044.html': '0005-T2 - 1XL - C$0',
'https://us.shein.com/SHEIN-VCAY-Plus-Ditsy-Floral-Print-Ruched-Bust-Knot-Front-Puff-Sleeve-Dress-p-13478549.html': '0006-T2 - 1XL - C$0',
'https://us.shein.com/SHEIN-LUNE-Plus-Size-Women-Solid-Color-V-Neck-Dai%E2%80%A6nitted-Cardigan-For-Autumn-Winter-p-39723331.html': '0007-T2 - 1XL - C$0',
'https://us.shein.com/SHEIN-LUNE-Plus-Size-Loose-Casual-Drawstring-Long-Sleeve-Shirt-With-Relaxed-Design-p-39584969.html': '0008-T2 - 1XL - C$0',
'https://us.shein.com/1pc-Plus-Size-Women-s-Heart-Shaped-Fishnet-Stocki%E2%80%A6Valentine-s-Day-And-Everyday-Wear-p-29250720.html': '0009-T0 - Unitalla - C$0',
'https://us.shein.com/SHEIN-WYWH-Plus-Size-Women-s-Pink-Ditsy-Floral-As%E2%80%A6Bachelorette-Outfits-Thanksgiving-p-38909628.html': '0010-T2 - 1XL - C$0',
'https://us.shein.com/SHEIN-WYWH-Plus-Size-V-Neck-White-Textured-Long-S%E2%80%A6n-Back-To-School-Clothes-For-Fall-p-45384983.html': '0011-T1 - XL - C$0',
'https://us.shein.com/SHEIN-WYWH-Vacation-Retro-Sun-Print-Knitted-Mesh-%E2%80%A6stival-Outfits-Long-Sleeves-Woman-p-36194149.html': '0012-T2 - 1XL, 0012-T3 - 2XL - C$0',
'https://us.shein.com/SHEIN-WYWH-Plus-Size-Ditsy-Floral-Ruffle-Collar-L%E2%80%A6tmas-Shirt-Princess-Women-Costume-p-45578574.html': '0013-T1 - XL - C$0',
'https://us.shein.com/SHEIN-Frenchy-Plus-Ditsy-Floral-Print-Flounce-Sleeve-Split-Thigh-Dress-p-23889604.html': '0014-T2 - 1XL, 0014-T3 - 2XL - C$0',
'https://us.shein.com/SHEIN-Holidaya-Plus-Floral-Print-Off-Shoulder-Shirred-Ruffle-Hem-Dress-p-10135332.html': '0015-T2 - 1XL - C$0',
'https://us.shein.com/SHEIN-Essnce-Plus-Size-Women-Casual-Off-Shoulder-%E2%80%A6-Loose-T-Shirt-Tops-Spring-Summer-p-28044691.html': '0016-T1 - XL, 0016-T3 - 2XL - C$0',
'https://us.shein.com/SHEIN-Essnce-Plus-Size-Women-s-Spring-Summer-And-%E2%80%A6s-Outfits-Women-Short-Sleeve-Tops-p-45637390.html': '0017-T2 - 1XL, 0017-T3 - 2XL - C$0',
'https://us.shein.com/ROMWE-Grunge-Punk-Star-Decor-Fishnet-Stockings-p-13833837.html': '0018-T0 - Unitalla - C$0',
'https://us.shein.com/SHEIN-Mulvari-Plus-Size-Women-s-Waist-Tie-Multi-Layered-Ruffle-Hem-Skirt-p-32333233.html': '0019-T2 - 1XL - C$0',
'https://us.shein.com/Forever-21-Plus-Size-Women-Fashion-Casual-Color-Block-Straight-Leg-Pants-p-39766430.html': '0020-T2 - 1XL, 0020-T3 - 2XL - C$0',
'https://us.shein.com/Celure-Plus-Swiss-Dot-Knot-Front-Crop-Top-p-2746593.html': '0021-T1 - XL, 0021-T3 - 2XL - C$0',
'https://us.shein.com/SHEIN-SunnyBelle-Plus-Size-Summer-Holiday-Solid-C%E2%80%A6ew-Year-Clothes-Maxi-Women-Outfit-p-35023895.html': '0022-T2 - 1XL, 0022-T3 - 2XL - C$0',
'https://us.shein.com/SHEIN-MOOSTA-Plus-Size-Solid-Color-Suit-Vest-p-31723104.html': '0023-T2 - 1XL, 0023-T3 - 2XL - C$0',
'https://us.shein.com/SHEIN-EZwear-Plus-Size-Black-Woven-Knot-Cami-Romper-p-28124424.html': '0024-T3 - 2XL - C$0',
'https://us.shein.com/SHEIN-EZwear-Valentine-s-Day-Plus-Size-Women-s-Le%E2%80%A6a-Daily-Wear-Autumn-Winter-Summer-p-44736781.html': '0025-T1 - XL - C$0',
'https://us.shein.com/SHEIN-EZwear-Plus-Fold-Pleated-Slant-Pocket-Corduroy-Shorts-For-Winter-p-8275147.html': '0026-T1 - XL, 0026-T2 - 1XL - C$0',
'https://us.shein.com/SHEIN-EZwear-Plus-Size-Women-s-Summer-And-Early-A%E2%80%A6lit-Sleeveless-Bodycon-Midi-Dress-p-41424869.html': '0027-T3 - 2XL - C$0',
'https://us.shein.com/SHEIN-EZwear-Plus-Solid-Crop-Cami-Top-p-2840814.html': '0028-T2 - 1XL - C$0',
'https://us.shein.com/SHEIN-EZwear-Plus-Fold-Pleated-Slant-Pocket-Corduroy-Shorts-p-11852489.html': '0029-T1 - XL, 0029-T2 - 1XL - C$0',
'https://us.shein.com/SHEIN-EZwear-Plus-Size-Woven-Blue-White-Striped-Casual-Shirt-And-Shorts-Set-p-27163628.html': '0030-T2 - 1XL - C$0',
'https://us.shein.com/SHEIN-EZwear-Plus-Size-Women-s-Leopard-Print-Squa%E2%80%A6Yoga-Fitness-Casual-Everyday-Wear-p-45234797.html': '0031-T2 - 1XL - C$0',
'https://us.shein.com/SHEIN-EZwear-Plus-Size-White-Simple-And-Slim-Fit-Commuter-Suit-Vest-p-36103003.html': '0032-T2 - 1XL, 0032-T3 - 2XL - C$0',
'https://us.shein.com/SHEIN-EZwear-Women-s-Plus-Size-Cherry-Graphic-Pri%E2%80%A6Tee-Suitable-For-Summer-Plus-Size-p-36225810.html': '0033-T2 - 1XL, 0033-T3 - 2XL - C$0',
'https://us.shein.com/SHEIN-EZwear-Plus-Lapel-Neck-Button-Front-Vest-Blazer-p-22592829.html': '0034-T2 - 1XL, 0034-T3 - 2XL - C$0',
'https://us.shein.com/SHEIN-EZwear-Plus-Solid-Button-Front-Lettuce-Trim-Plisse-Shirt-p-19057699.html': '0035-T3 - 2XL - C$0',
'https://us.shein.com/SHEIN-EZwear-Plus-Solid-Crop-Cami-Top-p-3235529.html': '0036-T2 - 1XL - C$0',
'https://us.shein.com/SHEIN-EZwear-Plus-Colorblock-Wide-Leg-Pants-Spring-Clothes-p-13746370.html': '0037-T2 - 1XL, 0037-T3 - 2XL - C$0',
'https://us.shein.com/SHEIN-EZwear-Plus-Size-Satin-Slit-Loose-Fit-Midi-Skirt-p-36627848.html': '0038-T2 - 1XL, 0038-T3 - 2XL - C$0',
'https://us.shein.com/INAWLY-Plus-Size-Hooded-Sweatshirt-With-Letter-Print-And-Drawstring-p-30573267.html': '0039-T3 - 2XL - C$0',
'https://us.shein.com/INAWLY-Summer-Cocktails-Short-Sleeve-T-Shirt-Graphic-Tees-Women-Tops-p-37020730.html': '0040-T1 - XL - C$0',
'https://us.shein.com/INAWLY-Plus-Size-Casual-Solid-Color-Shirt-With-Fr%E2%80%A6k-Long-Split-Design-Spring-Autumn-p-38904303.html': '0041-T2 - 1XL - C$0',
'https://us.shein.com/INAWLY-Plus-Size-Solid-Color-Casual-Long-Sleeve-S%E2%80%A6Buttons-Short-Front-And-Long-Back-p-35608661.html': '0042-T1 - XL - C$0',
'https://us.shein.com/Star-Print-Plus-Size-Tights-p-10121279.html': '0043-T0 - Unitalla - C$0',
'https://us.shein.com/SHEIN-Franclia-Plus-Size-Women-s-Random-Print-Squ%E2%80%A6esses-Womenwoman-Dress-For-Summer-p-37799813.html': '0044-T1 - XL - C$0',
'https://us.shein.com/SHEIN-Franclia-Plus-Size-Women-s-Ditsy-Floral-Pri%E2%80%A6-Buttoned-Dress-Maxi-Women-Outfit-p-36092561.html': '0045-T2 - 1XL - C$0',
'https://us.shein.com/SHEIN-Franclia-Plus-Size-Square-Neck-Ditsy-Floral%E2%80%A6on-Summer-Dress-Maxi-Women-Outfit-p-35342648.html': '0046-T2 - 1XL - C$0',
'https://us.shein.com/SHEIN-Swim-Curve-2025-Plus-Size-Women-Leopard-Hal%E2%80%A6Out-Sexy-Bikini-Set-Bikini-Summer-p-15911769.html': '0047-T2 - 1XL - C$0',
'https://us.shein.com/SHEIN-Swim-Curve-Summer-Beach-Plus-Hollow-Out-Dro%E2%80%A6Cover-Up-Dress-Without-Bikini-Set-p-13346395.html': '0048-T2 - 1XL, 0048-T3 - 2XL - C$0',
'https://us.shein.com/Plus-Size-Women-s-Stylish-3D-Camellia-Bikini-Set-Summer-p-35505802.html': '0049-T2 - 1XL, 0049-T3 - 2XL - C$0',
'https://us.shein.com/SHEIN-Swim-Curve-Summer-Beach-Plus-Zebra-Striped-%E2%80%A6awstring-Front-One-Piece-Swimsuit-p-15686342.html': '0050-T3 - 2XL - C$0',
'https://us.shein.com/SHEIN-Swim-Curve-Summer-Beach-Plus-Size-Paisley-P%E2%80%A6alter-Bikini-Set-With-Beach-Skirt-p-16497193.html': '0051-T2 - 1XL, 0051-T3 - 2XL - C$0',
'https://us.shein.com/SHEIN-Swim-Curve-Summer-Beach-Plus-Hollow-Out-Dro%E2%80%A6lder-Crop-Cover-Up-Without-Bikini-p-19573726.html': '0052-T2 - 1XL, 0052-T3 - 2XL - C$0',
'https://us.shein.com/SHEIN-Swim-Curve-Summer-Beach-Plus-Size-Allover-P%E2%80%A6-Back-Bikini-Set-With-Beach-Skirt-p-15002780.html': '0053-T2 - 1XL, 0053-T3 - 2XL - C$0',
'https://us.shein.com/Plus-Size-Appliques-One-Shoulder-One-Piece-Swimsu%E2%80%A6-Swimsuit-White-Two-Pieces-Summer-p-36949581.html': '0054-T2 - 1XL, 0054-T3 - 2XL - C$0',
'https://us.shein.com/SHEIN-Swim-Curve-Summer-Beach-Plus-Size-Women-s-O%E2%80%A6Swimsuit-With-Back-Bow-Decoration-p-27275675.html': '0055-T2 - 1XL - C$0',
'https://us.shein.com/SHEIN-Swim-Curve-Summer-Beach-Plus-Size-Women-s-3%E2%80%A6paghetti-Strap-Bikini-Set-Wedding-p-28005593.html': '0056-T2 - 1XL, 0056-T3 - 2XL - C$0',
'https://us.shein.com/SHEIN-Swim-Curve-Plus-Size-Women-2025-New-Year-Pa%E2%80%A6-Cutout-One-Piece-Swimsuit-Summer-p-34753641.html': '0057-T2 - 1XL - C$0',
'https://us.shein.com/SHEIN-VCAY-Plus-Size-Women-s-Marble-Printed-Asymmetrical-Hem-Vacation-Strapless-Top-p-35508994.html': '0058-T1 - XL, 0058-T3 - 2XL - C$0',
'https://us.shein.com/SHEIN-VCAY-Summer-Beach-Plus-Size-Marble-Print-Ha%E2%80%A6Triangle-Bikini-Set-With-Cover-Up-p-15212047.html': '0059-T2 - 1XL - C$0',
'https://us.shein.com/SHEIN-Swim-SXY-Summer-Beach-Plus-Lace-Up-Side-One-Piece-Swimsuit-p-18910627.html': '0060-T2 - 1XL - C$0',
'https://us.shein.com/SHEIN-Relaxiva-Plus-Size-Solid-Color-Pleated-Daily-Casual-Straight-Pants-p-35697681.html': '0061-T2 - 1XL - C$0',
'https://us.shein.com/SHEIN-Allurite-Plus-Size-Women-s-Elegant-High-Sli%E2%80%A6d-For-Party-Burgundy-Women-Outfit-p-45358283.html': '0062-T2 - 1XL - C$0',
'https://us.shein.com/SHEIN-BAE-Women-s-Satin-Mini-Cami-Dress-With-Backless-Tie-Up-Strap-Design-p-35385716.html': '0063-T2 - 1XL, 0063-T3 - 2XL - C$0',
'https://us.shein.com/SHEIN-BAE-Plus-Size-Women-s-Satin-Mini-Slip-Dress-With-Backless-Strappy-Design-p-35383797.html': '0064-T2 - 1XL, 0064-T3 - 2XL - C$0',
'https://us.shein.com/SHEIN-Swim-Chicsea-Summer-Beach-Plus-Size-Women-s%E2%80%A6ted-Halterneck-One-Piece-Swimsuit-p-28163542.html': '0065-T2 - 1XL, 0065-T3 - 2XL - C$0',
'https://us.shein.com/SHEIN-SXY-1pc-Plus-Size-Animal-Print-One-Piece-Sw%E2%80%A6uit-For-2025-New-Year-Party-Summer-p-2795538.html': '0066-T2 - 1XL - C$0',
'https://us.shein.com/SHEIN-SXY-Summer-Beach-Plus-Colorblock-Cut-Out-Drawstring-Front-One-Piece-Swimsuit-p-20155277.html': '0067-T2 - 1XL - C$0',
'https://us.shein.com/THE-POWERPUFF-GIRLS-X-SHEIN-Plus-Size-Casual-Cart%E2%80%A6-Neck-Short-Sleeve-T-Shirt-Summer-p-47133810.html': '0068-T2 - 1XL - C$0',
'https://us.shein.com/SHEIN-Essnce-Plus-Size-Women-s-Summer-Casual-Vaca%E2%80%A6on-And-Linen-Khaki-Wide-Leg-Pants-p-30485840.html': '0069-T2 - 1XL, 0069-T3 - 2XL - C$0',
'https://us.shein.com/SHEIN-Essnce-Women-s-Plus-Size-Casual-Knitted-Sle%E2%80%A6With-Flower-Pattern-Spring-Summer-p-37369533.html': '0070-T2 - 1XL - C$0',
'https://us.shein.com/SHEIN-Essnce-Plus-Size-Women-s-Summer-Casual-Vaca%E2%80%A6on-And-Linen-Khaki-Wide-Leg-Pants-p-33327772.html': '0071-T2 - 1XL, 0071-T3 - 2XL - C$0',
'https://us.shein.com/SHEIN-WYWH-Plus-Size-Women-Preppy-Vacation-Faux-C%E2%80%A6eve-Plaid-Peplum-Waist-Midi-Dress-p-40328072.html': '0072-T2 - 1XL, 0072-T3 - 2XL - C$0',
'https://us.shein.com/Firerie-Plus-Size-Women-Elegant-Multi-Occasion-As%E2%80%A6a-Date-Night-Concert-Other-Events-p-44182416.html': '0073-T2 - 1XL - C$0',
'https://us.shein.com/Firerie-Plus-Size-Comfortable-Elegant-Delicate-Dr%E2%80%A6d-Neck-Black-Halter-Top-For-Women-p-38121027.html': '0074-T2 - 1XL, 0074-T3 - 2XL - C$0',
'https://us.shein.com/POPSWAY-Plus-Square-Neck-Bodysuit-p-21765471.html': '0075-T2 - 1XL, 0075-T3 - 2XL - C$0',
'https://us.shein.com/INAWLY-Plus-Size-Solid-V-Neck-Batwing-Sleeve-Top-And-Pocket-Shorts-Casual-2pcs-Set-p-41771601.html': '0076-T2 - 1XL, 0076-T3 - 2XL - C$0',
'https://us.shein.com/SHEIN-MOOSTA-Plus-Size-Y2K-Summer-Slim-Fit-Croppe%E2%80%A6gan-Print-Graphic-Tees-Women-Tops-p-33010847.html': '0077-T3 - 2XL - C$0',
'https://us.shein.com/SHEIN-Swim-Chicsea-Plus-Size-3D-Floral-Pattern-Va%E2%80%A6ece-Swimsuitcurve-Swimsuit-Summer-p-39610245.html': '0078-T2 - 1XL, 0078-T3 - 2XL - C$0',
'https://us.shein.com/SHEIN-MOOSTA-Plus-Size-Casual-Solid-Color-Side-Bu%E2%80%A6leeveless-Knit-Sweater-Top-Autumn-p-50906220.html': '0079-T2 - 1XL, 0079-T3 - 2XL - C$0',
'https://us.shein.com/SHEIN-EZwear-Plus-Heart-Cut-Out-Lettuce-Trim-Tee-p-14772145.html': '0080-T2 - 1XL, 0080-T3 - 2XL - C$0',
'https://us.shein.com/SHEIN-EZwear-Women-s-Plus-Size-Knitted-Cardigan-S%E2%80%A6p-Dress-Solid-Color-Two-Piece-Set-p-35130881.html': '0081-T2 - 1XL, 0081-T3 - 2XL - C$0',
'https://us.shein.com/SHEIN-EZwear-Plus-Size-Women-s-Solid-Color-High-Waist-Short-Bud-Skirt-p-35899547.html': '0082-T2 - 1XL, 0082-T3 - 2XL - C$0',
'https://us.shein.com/SHEIN-EZwear-Plus-Leopard-Print-Split-Thigh-Dress-For-Summer-p-37675897.html': '0083-T2 - 1XL - C$0',
'https://us.shein.com/Attitoon-Plus-Size-Women-Casual-Cherry-Pattern-Fi%E2%80%A6leeve-T-Shirt-Suitable-For-Summer-p-34353343.html': '0084-T2 - 1XL, 0084-T3 - 2XL - C$0',
'https://us.shein.com/Attitoon-Casual-Minimalist-Cherry-Print-Round-Nec%E2%80%A6Women-T-Shirt-Suitable-For-Summer-p-36040375.html': '0085-T2 - 1XL, 0085-T3 - 2XL - C$0',
'https://us.shein.com/SHEIN-Swim-Mod-Plus-Size-Women-s-Random-Printed-S%E2%80%A6ce-Swimsuit-For-Daily-Wear-Summer-p-35744799.html': '0086-T2 - 1XL, 0086-T3 - 2XL - C$0',
'https://us.shein.com/SHEIN-Swim-Mod-Summer-Beach-Plus-Size-Strawberry-%E2%80%A6-Frill-Trim-High-Waist-Bikini-Set-p-10408375.html': '0087-T1 - XL - C$0',
'https://us.shein.com/Celure-Plus-Size-Solid-Color-Ruffle-Hem-Camisole-Top-For-Women-Summer-p-34708151.html': '0088-T2 - 1XL - C$0',
'https://us.shein.com/Celure-Plus-Size-Women-Vacation-Casual-Solid-Color-Knotted-Strapless-Top-p-33070241.html': '0089-T3 - 2XL - C$0',

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
