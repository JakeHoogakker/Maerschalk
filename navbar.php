<nav id="categorymenu">
      <ul class="nav-justified nav flex-column nav-pills ">
        <li class="nav-item" v-for="category in categories">
         <div class="card-link nav-link btn btn-default btn-outline-light collapsed">
            <a class="main " :href= '"#" + category.sublink'>
                {{category.name}}
            </a>
             <a id="icon" class="sub card-link" :href= '"#" + category.link' data-toggle="collapse">
                &larr;
            </a>
          </div>
            
          <div :id="category.link" class="collapse" data-parent="#categorymenu">
              <nav id="subcategorymenu">
                  <ul class="nav-justified nav flex-column nav-pills">
                    <li class="ora nav-item" v-for="category in category.subcategories">
                     <div class="nav-link btn btn-default btn-outline-light collapsed">
                        <a class="main card-link" :href= '"#" + category.sublink'>
                            {{category.name}}
                        </a>
                         <a id="icon" class="sub card-link" :href= '"#" + category.link' data-toggle="collapse">
                            &larr;
                        </a>
                      </div>
                      <div :id="category.link" class="collapse" data-parent="#subcategorymenu">

                      </div>
                    </li>
                  </ul>
              </nav>
          </div>
        </li>
      </ul>
    </nav>

<script src="NavbarVue.js"></script>
<div>
    
<div id="jumbotronContent" class="container col-sm-8">
    <ul class="nav-justified">
        <div class="nav-item" class="page-header">
            <h1>Sharing</h1>  
            <h5>Frontend > Social Media > Sharing</h5>
          </div>
        <li class="nav-item" v-for="content in contents">
  <div class="jumbotron">
    <h1>{{content.name}}</h1> 
      <h5>{{content.lang}}</h5>
        <p>{{content.content}}</p> 
  </div> 
        </li>
    </ul>
</div>

</div>

<script src="Jumbotron.js"></script>