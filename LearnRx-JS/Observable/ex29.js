(function (button) {
  var buttonClicks = Observable.fromEvent(button, "click");

  var subscription = buttonClicks
    .do(function (clickEvent) {
      alert("Button was clicked. Stopping Traversal.");

      // Stop traversing the button clicks
      subscription.unsubscribe();
    })
    .subscribe();
});
