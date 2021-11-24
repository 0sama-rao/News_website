const uuid = require('uuid/v4');

let DUMMY_ARTICLES = [
{  id: 'a1',
  title: '',
  description: 'One of the famous sky crappers',
  location: {
    lat: 40.7484474,
    lng: -73.9871516
  },
  address: '20 W 34th St, New York, NY 10001',
  creator: 'u1'
}
];

//for finding and throwing error 

const getPlaceById = (req, res, next) => {
  const placeId = req.params.pid; //{pid: 'p1'}
  const place = DUMMY_PLACES.find(p=>{
    return p.id === placeId;
  });

  if( !place ){
    throw new HttpError ('Could not find the place for the provide ID',404);
  }
  res.json({place}); // => {place } => {place: place}
};
