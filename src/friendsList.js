import React, { Component } from 'react'

export default class FriendsList extends Component {
    render() {
        return (
            <div>
                <div class="container">
   <div class="row">
      <div class="col-md-12">
         <div id="content" class="content content-full-width">
            <div class="profile">
               <div class="profile-header">
                  <div class="profile-header-cover"></div>
                  <div class="profile-header-content">
                     <div class="profile-header-img"> 
                        <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt=""> </img>
                     </div>
                     <div class="profile-header-info">
                        <h4 class="m-t-10 m-b-5">Sean Ngu</h4>
                        <p class="m-b-10">UXUI + Frontend Developer</p>
                        <a href="#" class="btn btn-xs btn-yellow">Edit Profile</a>
                     </div>
                  </div>
                  <ul class="profile-header-tab nav nav-tabs">
                     <li class="nav-item"><a href="#profile-post" class="nav-link" data-toggle="tab">POSTS</a></li>
                     <li class="nav-item"><a href="#profile-about" class="nav-link" data-toggle="tab">ABOUT</a></li>
                     <li class="nav-item"><a href="#profile-photos" class="nav-link" data-toggle="tab">PHOTOS</a></li>
                     <li class="nav-item"><a href="#profile-videos" class="nav-link" data-toggle="tab">VIDEOS</a></li>
                     <li class="nav-item"><a href="#profile-friends" class="nav-link active show" data-toggle="tab">FRIENDS</a></li>
                  </ul>
               </div>
            </div>
            <div class="profile-content">
               <div class="tab-content p-0">
                  <div class="tab-pane fade in active show" id="profile-friends">
                     <h4 class="m-t-0 m-b-20">Friend List (14)</h4>
                     <div class="row row-space-2">
                        <div class="col-md-6 m-b-2">
                           <div class="p-10 bg-white">
                              <div class="media media-xs overflow-visible">
                                 <a class="media-left" href="javascript:;">
                                 <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" class="media-object img-circle"></img>
                                 </a>
                                 <div class="media-body valign-middle">
                                    <b class="text-inverse">James Pittman</b>
                                 </div>
                                 <div class="media-body valign-middle text-right overflow-visible"> 
                                    <div class="btn-group dropdown">
                                       <a href="javascript:;" class="btn btn-default">Friends</a>
                                       <a href="javascript:;" data-toggle="dropdown" class="btn btn-default dropdown-toggle" aria-expanded="false"></a>
                                       <ul class="dropdown-menu dropdown-menu-right" x-placement="bottom-end" style="position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(101px, 34px, 0px);">
                                          <li><a href="javascript:;">Action 1</a></li>
                                          <li><a href="javascript:;">Action 2</a></li>
                                          <li><a href="javascript:;">Action 3</a></li>
                                          <li class="divider"></li>
                                          <li><a href="javascript:;">Action 4</a></li>
                                       </ul>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="col-md-6 m-b-2">
                           <div class="p-10 bg-white">
                              <div class="media media-xs overflow-visible">
                                 <a class="media-left" href="javascript:;">
                                 <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="" class="media-object img-circle"></img>
                                 </a>
                                 <div class="media-body valign-middle">
                                    <b class="text-inverse">Mitchell Ashcroft</b>
                                 </div>
                                 <div class="media-body valign-middle text-right overflow-visible">
                                    <div class="btn-group dropdown">
                                       <a href="javascript:;" class="btn btn-default">Friends</a>
                                       <a href="javascript:;" data-toggle="dropdown" class="btn btn-default dropdown-toggle"></a>
                                       <ul class="dropdown-menu dropdown-menu-right">
                                          <li><a href="javascript:;">Action 1</a></li>
                                          <li><a href="javascript:;">Action 2</a></li>
                                          <li><a href="javascript:;">Action 3</a></li>
                                          <li class="divider"></li>
                                          <li><a href="javascript:;">Action 4</a></li>
                                       </ul>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="col-md-6 m-b-2">
                           <div class="p-10 bg-white">
                              <div class="media media-xs overflow-visible">
                                 <a class="media-left" href="javascript:;">
                                 <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="" class="media-object img-circle"> </img>
                                 </a>
                                 <div class="media-body valign-middle">
                                    <b class="text-inverse">Ella Cabena</b>
                                 </div>
                                 <div class="media-body valign-middle text-right overflow-visible">
                                    <div class="btn-group dropdown">
                                       <a href="javascript:;" class="btn btn-default">Friends</a>
                                       <a href="javascript:;" data-toggle="dropdown" class="btn btn-default dropdown-toggle" aria-expanded="false"></a>
                                       <ul class="dropdown-menu dropdown-menu-right" x-placement="top-end" style="position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(101px, -2px, 0px);">
                                          <li><a href="javascript:;">Action 1</a></li>
                                          <li><a href="javascript:;">Action 2</a></li>
                                          <li><a href="javascript:;">Action 3</a></li>
                                          <li class="divider"></li>
                                          <li><a href="javascript:;">Action 4</a></li>
                                       </ul>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="col-md-6 m-b-2">
                           <div class="p-10 bg-white">
                              <div class="media media-xs overflow-visible">
                                 <a class="media-left" href="javascript:;">
                                 <img src="https://bootdey.com/img/Content/avatar/avatar4.png" alt="" class="media-object img-circle"></img>
                                 </a>
                                 <div class="media-body valign-middle">
                                    <b class="text-inverse">Declan Dyson</b>
                                 </div>
                                 <div class="media-body valign-middle text-right overflow-visible">
                                    <div class="btn-group dropdown">
                                       <a href="javascript:;" class="btn btn-default">Friends</a>
                                       <a href="javascript:;" data-toggle="dropdown" class="btn btn-default dropdown-toggle"></a>
                                       <ul class="dropdown-menu dropdown-menu-right">
                                          <li><a href="javascript:;">Action 1</a></li>
                                          <li><a href="javascript:;">Action 2</a></li>
                                          <li><a href="javascript:;">Action 3</a></li>
                                          <li class="divider"></li>
                                          <li><a href="javascript:;">Action 4</a></li>
                                       </ul>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="col-md-6 m-b-2">
                           <div class="p-10 bg-white">
                              <div class="media media-xs overflow-visible">
                                 <a class="media-left" href="javascript:;">
                                 <img src="https://bootdey.com/img/Content/avatar/avatar5.png" alt="" class="media-object img-circle"> </img>
                                 </a>
                                 <div class="media-body valign-middle">
                                    <b class="text-inverse">George Seyler</b>
                                 </div>
                                 <div class="media-body valign-middle text-right overflow-visible">
                                    <div class="btn-group dropdown">
                                       <a href="javascript:;" class="btn btn-default">Friends</a>
                                       <a href="javascript:;" data-toggle="dropdown" class="btn btn-default dropdown-toggle"></a>
                                       <ul class="dropdown-menu dropdown-menu-right">
                                          <li><a href="javascript:;">Action 1</a></li>
                                          <li><a href="javascript:;">Action 2</a></li>
                                          <li><a href="javascript:;">Action 3</a></li>
                                          <li class="divider"></li>
                                          <li><a href="javascript:;">Action 4</a></li>
                                       </ul>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="col-md-6 m-b-2">
                           <div class="p-10 bg-white">
                              <div class="media media-xs overflow-visible">
                                 <a class="media-left" href="javascript:;">
                                 <img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="" class="media-object img-circle"></img>
                                 </a>
                                 <div class="media-body valign-middle">
                                    <b class="text-inverse">Patrick Musgrove</b>
                                 </div>
                                 <div class="media-body valign-middle text-right overflow-visible">
                                    <div class="btn-group dropdown">
                                       <a href="javascript:;" class="btn btn-default">Friends</a>
                                       <a href="javascript:;" data-toggle="dropdown" class="btn btn-default dropdown-toggle"></a>
                                       <ul class="dropdown-menu dropdown-menu-right">
                                          <li><a href="javascript:;">Action 1</a></li>
                                          <li><a href="javascript:;">Action 2</a></li>
                                          <li><a href="javascript:;">Action 3</a></li>
                                          <li class="divider"></li>
                                          <li><a href="javascript:;">Action 4</a></li>
                                       </ul>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="col-md-6 m-b-2">
                           <div class="p-10 bg-white">
                              <div class="media media-xs overflow-visible">
                                 <a class="media-left" href="javascript:;">
                                 <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="" class="media-object img-circle"> </img>
                                 </a>
                                 <div class="media-body valign-middle">
                                    <b class="text-inverse">Taj Connal</b>
                                 </div>
                                 <div class="media-body valign-middle text-right overflow-visible">
                                    <div class="btn-group dropdown">
                                       <a href="javascript:;" class="btn btn-default">Friends</a>
                                       <a href="javascript:;" data-toggle="dropdown" class="btn btn-default dropdown-toggle"></a>
                                       <ul class="dropdown-menu dropdown-menu-right">
                                          <li><a href="javascript:;">Action 1</a></li>
                                          <li><a href="javascript:;">Action 2</a></li>
                                          <li><a href="javascript:;">Action 3</a></li>
                                          <li class="divider"></li>
                                          <li><a href="javascript:;">Action 4</a></li>
                                       </ul>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="col-md-6 m-b-2">
                           <div class="p-10 bg-white">
                              <div class="media media-xs overflow-visible">
                                 <a class="media-left" href="javascript:;">
                                 <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" class="media-object img-circle"></img>
                                 </a>
                                 <div class="media-body valign-middle">
                                    <b class="text-inverse">Laura Pollock</b>
                                 </div>
                                 <div class="media-body valign-middle text-right overflow-visible">
                                    <div class="btn-group dropdown">
                                       <a href="javascript:;" class="btn btn-default">Friends</a>
                                       <a href="javascript:;" data-toggle="dropdown" class="btn btn-default dropdown-toggle"></a>
                                       <ul class="dropdown-menu dropdown-menu-right">
                                          <li><a href="javascript:;">Action 1</a></li>
                                          <li><a href="javascript:;">Action 2</a></li>
                                          <li><a href="javascript:;">Action 3</a></li>
                                          <li class="divider"></li>
                                          <li><a href="javascript:;">Action 4</a></li>
                                       </ul>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="col-md-6 m-b-2">
                           <div class="p-10 bg-white">
                              <div class="media media-xs overflow-visible">
                                 <a class="media-left" href="javascript:;">
                                 <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="" class="media-object img-circle"></img>
                                 </a>
                                 <div class="media-body valign-middle">
                                    <b class="text-inverse">Dakota Mannix</b>
                                 </div>
                                 <div class="media-body valign-middle text-right overflow-visible">
                                    <div class="btn-group dropdown">
                                       <a href="javascript:;" class="btn btn-default">Friends</a>
                                       <a href="javascript:;" data-toggle="dropdown" class="btn btn-default dropdown-toggle"></a>
                                       <ul class="dropdown-menu dropdown-menu-right">
                                          <li><a href="javascript:;">Action 1</a></li>
                                          <li><a href="javascript:;">Action 2</a></li>
                                          <li><a href="javascript:;">Action 3</a></li>
                                          <li class="divider"></li>
                                          <li><a href="javascript:;">Action 4</a></li>
                                       </ul>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="col-md-6 m-b-2">
                           <div class="p-10 bg-white">
                              <div class="media media-xs overflow-visible">
                                 <a class="media-left" href="javascript:;">
                                 <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" class="media-object img-circle"></img>
                                 </a>
                                 <div class="media-body valign-middle">
                                    <b class="text-inverse">Timothy Woolley</b>
                                 </div>
                                 <div class="media-body valign-middle text-right overflow-visible">
                                    <div class="btn-group dropdown">
                                       <a href="javascript:;" class="btn btn-default">Friends</a>
                                       <a href="javascript:;" data-toggle="dropdown" class="btn btn-default dropdown-toggle"></a>
                                       <ul class="dropdown-menu dropdown-menu-right">
                                          <li><a href="javascript:;">Action 1</a></li>
                                          <li><a href="javascript:;">Action 2</a></li>
                                          <li><a href="javascript:;">Action 3</a></li>
                                          <li class="divider"></li>
                                          <li><a href="javascript:;">Action 4</a></li>
                                       </ul>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="col-md-6 m-b-2">
                           <div class="p-10 bg-white">
                              <div class="media media-xs overflow-visible">
                                 <a class="media-left" href="javascript:;">
                                 <img src="https://bootdey.com/img/Content/avatar/avatar5.png" alt="" class="media-object img-circle"></img>
                                 </a>
                                 <div class="media-body valign-middle">
                                    <b class="text-inverse">Benjamin Congreve</b>
                                 </div>
                                 <div class="media-body valign-middle text-right overflow-visible">
                                    <div class="btn-group dropdown">
                                       <a href="javascript:;" class="btn btn-default">Friends</a>
                                       <a href="javascript:;" data-toggle="dropdown" class="btn btn-default dropdown-toggle"></a>
                                       <ul class="dropdown-menu dropdown-menu-right">
                                          <li><a href="javascript:;">Action 1</a></li>
                                          <li><a href="javascript:;">Action 2</a></li>
                                          <li><a href="javascript:;">Action 3</a></li>
                                          <li class="divider"></li>
                                          <li><a href="javascript:;">Action 4</a></li>
                                       </ul>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="col-md-6 m-b-2">
                           <div class="p-10 bg-white">
                              <div class="media media-xs overflow-visible">
                                 <a class="media-left" href="javascript:;">
                                 <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" class="media-object img-circle"></img>
                                 </a>
                                 <div class="media-body valign-middle">
                                    <b class="text-inverse">Mariam Maddock</b>
                                 </div>
                                 <div class="media-body valign-middle text-right overflow-visible">
                                    <div class="btn-group dropdown">
                                       <a href="javascript:;" class="btn btn-default">Friends</a>
                                       <a href="javascript:;" data-toggle="dropdown" class="btn btn-default dropdown-toggle"></a>
                                       <ul class="dropdown-menu dropdown-menu-right">
                                          <li><a href="javascript:;">Action 1</a></li>
                                          <li><a href="javascript:;">Action 2</a></li>
                                          <li><a href="javascript:;">Action 3</a></li>
                                          <li class="divider"></li>
                                          <li><a href="javascript:;">Action 4</a></li>
                                       </ul>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="col-md-6 m-b-2">
                           <div class="p-10 bg-white">
                              <div class="media media-xs overflow-visible">
                                 <a class="media-left" href="javascript:;">
                                 <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="" class="media-object img-circle"></img>
                                 </a>
                                 <div class="media-body valign-middle">
                                    <b class="text-inverse">Blake Gerrald</b>
                                 </div>
                                 <div class="media-body valign-middle text-right overflow-visible">
                                    <div class="btn-group dropdown">
                                       <a href="javascript:;" class="btn btn-default">Friends</a>
                                       <a href="javascript:;" data-toggle="dropdown" class="btn btn-default dropdown-toggle"></a>
                                       <ul class="dropdown-menu dropdown-menu-right">
                                          <li><a href="javascript:;">Action 1</a></li>
                                          <li><a href="javascript:;">Action 2</a></li>
                                          <li><a href="javascript:;">Action 3</a></li>
                                          <li class="divider"></li>
                                          <li><a href="javascript:;">Action 4</a></li>
                                       </ul>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="col-md-6 m-b-2">
                           <div class="p-10 bg-white">
                              <div class="media media-xs overflow-visible">
                                 <a class="media-left" href="javascript:;">
                                 <img src="https://bootdey.com/img/Content/avatar/avatar4.png" alt="" class="media-object img-circle"></img>
                                 </a>
                                 <div class="media-body valign-middle">
                                    <b class="text-inverse">Gabrielle Bunton</b>
                                 </div>
                                 <div class="media-body valign-middle text-right overflow-visible">
                                    <div class="btn-group dropdown">
                                       <a href="javascript:;" class="btn btn-default">Friends</a>
                                       <a href="javascript:;" data-toggle="dropdown" class="btn btn-default dropdown-toggle"></a>
                                       <ul class="dropdown-menu dropdown-menu-right">
                                          <li><a href="javascript:;">Action 1</a></li>
                                          <li><a href="javascript:;">Action 2</a></li>
                                          <li><a href="javascript:;">Action 3</a></li>
                                          <li class="divider"></li>
                                          <li><a href="javascript:;">Action 4</a></li>
                                       </ul>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</div>
            </div>
        )
    }
}

// <!DOCTYPE html>
// <html>
// <head>
// <style>
// .dropdown {
//   position: relative;
//   display: inline-block;
// }

// .dropdown-content {
//   display: none;
//   position: absolute;
//   background-color: #f9f9f9;
//   min-width: 160px;
//   box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
//   z-index: 1;
// }

// .dropdown:hover .dropdown-content {
//   display: block;
// }

// .desc {
//   padding: 15px;
//   text-align: center;
// }
// </style>
// </head>
// <body>

// <h2>Dropdown Image</h2>
// <p>Move the mouse over the image below to open the dropdown content.</p>

// <div class="dropdown">
//   <img src="img_5terre.jpg" alt="Cinque Terre" width="100" height="50">
//   <div class="dropdown-content">
//   <img src="img_5terre.jpg" alt="Cinque Terre" width="300" height="200">
//   <div class="desc">Beautiful Cinque Terre</div>
//   </div>
// </div>

// </body>
// </html>
