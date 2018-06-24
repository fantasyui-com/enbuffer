module.exports = function(options){

  const db = new Map();
  const track = new Map();

  return {
    set: function(path, object){

      if( track.has(path) ){
      }else{
        track.set(path, new Set())
      }
      track.get(path).add(object.uuid)

        if(db.has(object.uuid)){
          // Object Exists
          if(object.version > db.get(object.uuid).version ){
            // Incoming has an older version
            db.set(object.uuid, object);
            return true; // a change has occured in the dataset
          }
        }else{
          // First-time Storage
          db.set(object.uuid, object);
          return true; // a change has occured in the dataset
        }
     },
    get: function(uuid){
       return db.get(uuid);
     },
    all: function(path){
      return Array.from(track.get(path)).map(id=>db.get(id))

       return Array.from(db);
     },
  };

}