handlers.makeAPICall = function (args, context) {
    var request = {
        PlayFabId: currentPlayerId, 
        Amount: 10000,
        VirtualCurrency: "VC"
    };
    // The pre-defined "server" object has functions corresponding to each PlayFab server API 
    // (https://api.playfab.com/Documentation/Server). It is automatically 
    // authenticated as your title and handles all communication with 
    // the PlayFab API, so you don't have to write extra code to issue HTTP requests. 
    var playerStatResult = server.AddUserVirtualCurrency(request);
};
