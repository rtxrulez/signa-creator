import domtoimage from "dom-to-image";

function getName(type) {
  let d = new Date();
  return (
    "signa_" +
    d.getFullYear() +
    d.getMonth() +
    d.getDate() +
    "_" +
    (d.getTime() % (24 * 1000)) +
    "." +
    type.toString()
  );
}

export const ElementToImg = (node, typeImg) => {
  let typeImgStr = "";

  if (typeImg === "jpg") {
    typeImgStr = "toJpeg";
  } else {
    typeImgStr = "toPng";
  }

  domtoimage[typeImgStr](node, {
    quality: 1,
    width: node.offsetWidth,
    height: node.offsetHeight,
    bgcolor: "#FF"
  })
    .then(function(dataUrl) {
      let link = document.createElement("a");

      link.download = getName(typeImg);
      link.href = dataUrl;
      link.click();
    })
    .catch(function(error) {
      console.error("oops, something went wrong!", error);
    });
};

export const ElementToBase64 = (node, typeImg) => {
  let typeImgStr = "";

  if (typeImg === "jpg") {
    typeImgStr = "toJpeg";
  } else {
    typeImgStr = "toPng";
  }

  return domtoimage[typeImgStr](node, {
    quality: 1,
    width: node.offsetWidth,
    height: node.offsetHeight,
    bgcolor: "#FF"
  })
  .catch(function(error) {
    console.error("oops, something went wrong!", error);
  });
};
