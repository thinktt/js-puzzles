// We need to find the basins within a set of data
// First ignore all outward sloping  points, since they don't create basins.
 
// Then we'll look for the peaks and find the 2 highest points to  determine our basin.
 
var buildings = [4, 2, 5, 2,3, 4,2,0,3];
var basins = [];
function findBasins(buildings) {
    for (var i =0; i < buildings.length; i++) {
        // taller than building on the right?
        if (buildings[i] > buildings[i+1]) {
            var start = i;
            var max = null;
            // We've found a basin. now lets find the tallest peak
            var j = i+1;
            var basin_obj = {
                start: buildings[i],
                basin: [],
                index: []
            };
            for (j; j < buildings.length; j++) {
                if (buildings[j] < buildings[j+1]) {
                    basin_obj.basin.push(buildings[j]);
                    basin_obj.index.push(j);
                    max = buildings[j+1];
                } else {
                    if (basin_obj.basin.length) {
                        basin_obj.end = buildings[j];
                        basins.push(basin_obj);
                    }
                    break;
                }
            }
        }
    }
}
 
function calculateArea(basins) {
    var area = 0, i, j;
    for (i in basins) {
        flood_level = basins[i].start > basins[i].end ? basins[i].end : basins[i].start;
        var basin = basins[i].basin;
        for (j in basin) {
            area +=(flood_level - basin[j]);
        }
    }
    return area; 
}


function findAll(buildings) {
    basins = [];
    findBasins(buildings);
    return calculateArea(basins);
}


module.exports = findAll;
