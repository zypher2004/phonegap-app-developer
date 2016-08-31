function readFile(filepath, callback) {
    window.requestFileSystem(
        LocalFileSystem.PERSISTENT,
        0,
        function(fileSystem) {
            fileSystem.root.getFile(
                filepath,
                null,
                function gotFileEntry(fileEntry) {
                    fileEntry.file(
                        function gotFile(file){
                            var reader = new FileReader();
                            reader.onloadend = function(evt) {
                                // #72 - Fix WP8 loading of config.json
                                // On WP8, `evt.target.result` is returned as an object instead
                                // of a string. Since WP8 is using a newer version of the File API
                                // this may be a platform quirk or an API update.
                                var text = evt.target.result;
                                text = (typeof text === 'object') ? JSON.stringify(text) : text;
                                callback(null, text); // text is a string
                            };
                            reader.readAsText(file);
                        },
                        function(error) {
                            callback(error);
                        }
                    );
                },
                function(error) {
                    callback(error);
                }
            );
        },
        function(error) {
            callback(error);
        }
    );
}

function saveFile(filepath, data, callback) {
    data = (typeof data === 'string') ? data : JSON.stringify(data);

    window.requestFileSystem(
        LocalFileSystem.PERSISTENT,
        0,
        function(fileSystem) {
            fileSystem.root.getFile(
                filepath,
                { create: true, exclusive: false },
                function(fileEntry) {
                    fileEntry.createWriter(
                        function(writer) {
                            writer.onwriteend = function(evt) {
                                callback();
                            };
                            writer.write(data);
                        },
                        function(e) {
                            callback(e);
                        }
                    );
                },
                function(e) {
                    callback(e);
                }
            );
        },
        function(e) {
            callback(e);
        }
    );
}

function parseAsJSON(text) {
    try {
        return JSON.parse(text);
    } catch(e) {
        return {};
    }
}

export function load(callback) {
  readFile('config.json', function(e, text) {
      config = parseAsJSON(text);

      // load defaults
      config.address = config.address || '127.0.0.1:3000';
      config.optIn = config.optIn || false;
      callback(config);
  });
}

export function save(data, callback) {
  saveFile('config.json', data, function(e) {
      callback();
  });
}
