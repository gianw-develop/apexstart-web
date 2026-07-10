const sharp = require("sharp");

const src =
  "C:\\Users\\gianc\\.verdent\\storage\\profiles\\prod-s1\\workspaces\\partnership--proj_76543df1ffa5c07a\\shared\\blobs\\sha256\\76\\51\\7651a7c4c499ca1f14a3693660c0c9d2d285b1b8f347b0af66a43fb6cd707c42";

sharp(src)
  .trim()
  .toFile(
    "C:\\Users\\gianc\\Documents\\Devin Proyectos\\PartnerShip\\apexstart-web-temp\\public\\logo.png"
  )
  .then(() => console.log("logo ok"))
  .catch((e) => console.error(e));
