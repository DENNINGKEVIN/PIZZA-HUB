// bs logic
$(document).ready(function () {
  function order(size, crust, toppings) {
    this.size1 = size;
    this.crust1 = crust;
    this.toppings1 = toppings;
  }
  order.prototype.orderlist = function () {
    return "size:" + this.size1 + ",crust:" + this.crust1 + ",toppings:" + this.toppings1;
  };
});

$(document).ready(function () {
  //image hover effect
  $("#hover1").hover(function () {
    $("#imgtext1").toggle()
  })
  $("#hover2").hover(function () {
    $("#imgtext2").toggle()
  })
  $("#hover3").hover(function () {
    $("#imgtext3").toggle()
  })
  $("#hover4").hover(function () {
    $("#imgtext4").toggle()
  })
  $("#hover5").hover(function () {
    $("#imgtext5").toggle()
  })
  $("#hover6").hover(function () {
    $("#imgtext6").toggle()
  })
  $("#hover7").hover(function () {
    $("#imgtext7").toggle()
  })
  $("#hover8").hover(function () {
    $("#imgtext8").toggle()
  })
});

function Pizza(style, size) {
  this.style = style;
  this.size = size;
  this.toppings = [];
  this.price = 0;
}

Pizza.prototype.cost = function () {
  var price = 0;
  if (this.size === "Personal") {
    price += 8;
  } else if (this.size === "Medium") {
    price += 10;
  } else if (this.size === "Large") {
    price += 12;
  } else {
    price += 15;
  }

  for (var i = 0; i < this.toppings.length; i++) {
    price += 1;
  }

  this.price = price;
}

Pizza.prototype.toppingsList = function () {
  if (this.toppings.length > 0) {
    return this.toppings.join(", ");
  } else {
    return "None";
  }
}

$(document).ready(function () {
  var total = 0;
  $(".cartTotal").text(total);

  $("#pizzaForm").submit(function (event) {
    event.preventDefault();
    var style = $("#style").val();
    var size = $("#size").val();
    var newPizza = new Pizza(style, size);

    $("input:checkbox[name=topping]:checked").each(function () {
      var toppingChoice = $(this).val();
      newPizza.toppings.push(toppingChoice);
    });

    newPizza.cost();
    total += newPizza.price;

    $(".cartTotal").text(total);
    $(".cartWell").show();;
    $("#cartHeader").show();
    $("ol#cart").append("<li><span class='cartItem'>" + newPizza.size + " " + newPizza.style + " Pizza" + "</span></li>");

    $(".cartItem").last().click(function () {
      $("#show-pizza").show();
      $("#pizzaListName").text(newPizza.size + " " + newPizza.style + " Pizza");
      $(".size").text(newPizza.size);
      $(".style").text(newPizza.style);
      $(".toppings").text(newPizza.toppingsList());
      $(".cost").text(newPizza.price);
    });
    $("#pizzaForm")[0].reset();
  });

  $("button#submitCart").click(function () {
    $(".pizzaMaker").hide();
    $("button#submitCart").hide();
    $(".choiceWell").show();
  });

  $("button#pickup").click(function () {
    $(".choiceWell").hide();
    $(".pickupWell").show();
  });

  $("button#delivery").click(function () {
    total += 7;
    $(".cartTotal").text(total);
    $(".choiceWell").hide();
    $(".deliveryWell").show();
  });

  $("button#submitPickupForm").click(function () {
    var userName = $("input#pickupName").val();
    $(".nameInput").text(userName);
    $("form#pickupForm").hide();
    $("#pickupEnd").show()
  });

  $("button#submitDeliveryForm").click(function () {
    var userName = $("input#deliveryName").val();
    var address = $("input#address").val();
    var city = $("input#city").val();
    var state = $("input#state").val();
    $(".nameInput").text(userName);
    $(".addressInput").text(address + ", " + city + " " + state);
    $("form#deliveryForm").hide();
    $("#deliveryEnd").show();
  });

  $("button.reset").click(function () {
    location.reload();
  });
});
