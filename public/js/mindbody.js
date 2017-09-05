$("button").click(function(event) {
  if ($("#mindbody").val() !== "") {
    event.preventDefault();
    let data = 'JSON Request Data';
    let request = $.ajax({
        url: `https://api.mindbodyonline.com/0_5/ClassService.asmx/XFtVWdlDjO3Vv9OZPFv4mF7mrdk=${searchText}&s=json`,
        method: "GET",
        dataType: 'json',
        data: JSON.stringify(data),
        success(innerData) {
            mindBody(innerData);
            console.log(innerData);
            // let mindBody = [];
            // let mindBodyInfo = {};
            // console.log("mindBody", mindBody);
        }
    })
  }
});
