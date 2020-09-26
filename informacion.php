<?php
    session_start();

    if($_SESSION['login'] == 'ok')
    {

    }
    else{
         header("Location: index.php");
    }
?>
        <!-- Navbar -->
         <?php require_once 'includes/navbar.php'; ?>
        <!-- Fin navbar -->

        <br>

        <div class="informacion text-center">
        <div class="row">
        <div class="col-4">
            <div class="list-group" id="list-tab" role="tablist">
            <a class="list-group-item list-group-item-action active" id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home">Gutación</a>
            <a class="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list" href="#list-profile" role="tab" aria-controls="profile">Sobre Nosotros</a>
            <a class="list-group-item list-group-item-action" id="list-messages-list" data-toggle="list" href="#list-messages" role="tab" aria-controls="messages">Contactanos</a>
            </div>
        </div>
        <div class="col-8">
            <div class="tab-content" id="nav-tabContent">
            <div class="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod facilis error nisi porro dolore praesentium dolorem officiis nobis molestiae sint consequatur, adipisci suscipit perspiciatis! Voluptate quidem officiis natus dicta reprehenderit.</div>
            <div class="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores laudantium illo eum atque assumenda quam error nam corrupti accusanti! Commodi.</div>
            <div class="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list">
                <p>Mexicali, Baja California, Mexico</p> 
                <p>686-xxx-xxxx</p>
                <p>Correo: </p>
            </div>

            </div>
        </div>
        </div>
        </div>



<?php require_once 'includes/footer.php'; ?>