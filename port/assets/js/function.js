var keyword = document.getElementById("keyword");
var container = document.getElementById("container");
var button = document.getElementById("button");

keyword.addEventListener("keyup", function () {
  // make ajax object
  var xhr = new XMLHttpRequest();

  // ajax check
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      container.innerHTML = xhr.responseText;
    }
  };

  //   ajax execution
  if (keyword.value == "photo") {
    xhr.open("get", "./ajax/me.html", true);
    xhr.send();
  } else if (keyword.value == "school") {
    xhr.open("get", "./ajax/school.php", true);
    xhr.send();
  } else if (keyword.value == "project") {
    xhr.open("get", "./ajax/project.php", true);
    xhr.send();
  } else if (keyword.value !== "photo" || keyword.value !== "project" || keyword.value !== "school") {
    xhr.open("get", "./ajax/blank.php", true);
    xhr.send();
  }
});

//  AJAX
//   $("#form").on("submit", function () {
//   let masuk = document.querySelector("input").value;
// alert(masuk);
// die;
//     $.ajax({
//       type: "post",
//       url: "index.html",
//       data: { masuk: masuk },
//       success: function (response) {
//         alert(masuk);
//       },
//       error: function () {
//         alert("error");
//         document.Location("function.php");
//       },
//     });
//   });
