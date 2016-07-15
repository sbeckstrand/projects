var students = [
  {name: 'Kyla', track: 'Web Development', achievements: 7, points: 207},
  {name: 'Benjamin', track: 'Ruby Development', achievements: 30, points: 922},
  {name: 'Milo', track: 'IOS Development', achievments: 9, points: 263},
  {name: 'Sarah', track: 'Python Development', achievements: 13, points: 398},
  {name: 'Dia', track: 'Android Develoment', achievements: 3, points: 91}
]

function studentInfo( list ) {
  for (var i = 0; i < list.length; i += 1) {
    document.write(
    '<p>Name: ' + list[i].name + '</p>' +
    '<p>TracK: ' + list[i].track +'</p>' +
    '<p>Achievements: ' + list[i].achievements + '</p>' +
    '<p>Points: ' + list[i].points + '</p>' +
    '<p>----------------------------</p>'
    )

  }

}

studentInfo(students);
