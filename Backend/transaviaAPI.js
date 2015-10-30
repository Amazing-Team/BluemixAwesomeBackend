//var transavia = function () {

//quick access to url resources
var resources = {
  origin: '&origin=', //3 letter airport id
  destination: '&destination=', //3 letter airport id
  origindeparturedate: '&origindeparturedate=', //yyyyMM(dd)
  origindeparturetime: '&origindeparturetime=', //timerange (0000-2359)
  origindeparturedayofweek: '&origindeparturedayofweek=', //yyyyMM(dd)
  adults: '&adults=', //required field
  price: '&price=', //price range (50-200)
  grouppricing: '&groupPricing=', //true = total price for all people, false = price/person
  directflight: '&DirectFlight=', //pretty much self explanatory
  orderby: '&orderby='
    /*
      Comma-separated list of fields on which the result must be ordered.
      Allowed values: 'Origin', 'Destination', 'OriginDepartureDate', 
      'DestinationArrivalDate', 'Price'. 
      For return flights also the values 'DestinationDepartureDate' and 
      'OriginArrivalDate' can be used. 
      (default = OriginDepartureDate, Origin, Destination)
    */
};

/**
 * pass the values you want to search and it will return a url link you can GET
 * @param {Object} params A collection of parameters and their values
 *                        {
 *                        param [
 *                        val, val, val
 *                        ],
 *                        param [
 *                          val, val, val
 *                          ]
 */
var buildUrl = function (params) {
  console.log('function');
  var result = '';

  for (var index in params) {
    if (params.hasOwnProperty(index)) {
      var param = params[index];
      
      console.log(param);

      result += resources[index];

      param.forEach(function (value) {
        result += value + ',';
      });
      
      result = result.substr(0, result.length - 1);
    }
  }

  return result;
};

module.exports.resources = resources;
module.exports.buildUrl = buildUrl;