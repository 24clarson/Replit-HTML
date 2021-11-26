counter = 33
function colorshift(id_to_change) {
    counter = counter + 1
    final_color = 'rgb(' + String(counter*40%255) + ',' + String(counter*20%255) + ',' + String(counter*70%255) + ')'
    document.getElementById(id_to_change).style.color = final_color
}