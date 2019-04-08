var categorymenu= new Vue({ 
    el: '#categorymenu',
    data: {
        categories: [
          { name: 'Backend',
            sublink: 'demo',
            link: 'nothing',
            subcategories: [
                {   name: 'Buttons',
                    sublink: 'test4',
                    link: 'nothing',    },
                { name: 'Layout',
                    link: 'test6',
                    sublink: 'test4',},
                { name: 'Social Media',
                    link: 'test6',
                    sublink: 'test4',},
                { name: 'Media',
                    link: 'test6',
                    sublink: 'test4',}
            ]},  
          { name: 'Frontend',
            link: 'test',
            sublink: 'test4',
            subcategories: [
                {   name: 'Frontend2',
                    link: 'test',
                    sublink: 'test4',   },
                {   name: 'Miscellaneous2',
                    link: 'test2',
                    sublink: 'test4',}
            ]},
          { name: 'Miscellaneous',
            link: 'test2',
            subcategories: [
                {   name: 'Frontend2',
                    link: 'test',
                    sublink: 'test4',   },
                {   name: 'Miscellaneous2',
                    link: 'test2',
                    sublink: 'test4',}
            ]}
         ]
    }
});

/*$('a.main').click(function() {

  $(this).toggleClass("active");

  if ( $(this).hasClass( "active" ) ) {
    $('#icon').text( "→" );
      $(this).addClass( "activeButton" );
  } else {
      $(this).removeClass( "activeButton" );
    $('#icon').text( "←" );
  }

});*/

$('a').on( "click", function()  {

  $(this).toggleClass("active");

  if ( $(this).hasClass( "active" ) ) {
      $('.ora').addClass( "activeButton" );
      if ($(this).hasClass( "sub" )){
          $(this).text( "↓" );
      }
      else if ($(this).hasClass( "main" ))
      {
          $('#icon').text( "→" );
      }

  } else {
      $('.ora').removeClass( "activeButton" );
    $('#icon').text( "←" );
  }

});


/*var subcategory= new Vue({ 
    el: '#subcategory',
    data: {
        subcategories: [
          { name: 'Backend2',
            link: 'demo'},
          { name: 'Frontend',
            link: 'test'},
          { name: 'Miscellaneous',
            link: 'test2'}
         ]
    }
});*/

