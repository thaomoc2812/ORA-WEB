<!DOCTYPE html>

<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Mail Client Kiều Phương Thảo</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <script src="https://accounts.google.com/gsi/client" async defer></script>
        <script src="https://code.jquery.com/jquery-3.7.0.js" integrity="sha256-JlqSTELeR4TLqP0OG9dxM7yDPqX1ox/HfgiSLBj8+kM=" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js"></script>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer">
    
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/2.9.2/umd/popper.min.js"></script>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script> 

        <link rel="stylesheet" href="style.css">
        <script src="script.js" async defer></script>
        
    </head>
    <body>
        <div class="email-frame shadow-lg">
            <div class="card">
                <div class="card-header">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-11">

                                <h3>Send Email</h3>
                            </div>
                            <div class="col-md-1">
                                <button class="btn-close close-frame"></button>

                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-body">
                    <form>
                    <div class="mb-3">
                        <label for="email-to" class="form-label">Đến</label>
                        <input type="email" class="form-control" id="email-to" placeholder="Nhập địa chỉ email" value='thao.kp205128@gmail.com'>
                    </div>
                    <div class="mb-3">
                        <label for="email-subject" class="form-label">Chủ đề</label>
                        <input type="text" class="form-control" id="email-subject" placeholder="Nhập chủ đề email">
                    </div>
                    <div class="mb-3">
                        <label for="email-message" class="form-label">Nội dung</label>
                        <textarea class="form-control" id="email-message" rows="5" placeholder="Nhập nội dung email" >

                            </textarea>
                            <div class="mb-3">
                                <label for="file-input" class="form-label">File đính kèm</label>
                                <input type="file" class="form-control" id="file-input">
                            </div>
                    </div>
                    <button type="submit" class="btn btn-primary" id='send-email'>Gửi</button>
                    </form>
                </div>
            </div>
       </div>
       
       <div class="container-fluid">
            <div class="row">
                <div class="col-md-2">
                    <div class="sidebar">
                        <div class="row mt-2 ml-3">
                            <div class="col-12">
                                    <h2>MAIL</h2>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <button type="button" class="btn btn-light mt-2" id="mail-box" style="width: 100%">Hộp Thư</button>
                                <button type="button" class="btn btn-light mt-2" id="create-mail" style="width: 100%">Create Email</button>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div class="col-md-10">
                    <div class="row">
                        <div class="col-md-12 p-2 menu">
                            <nav class="nav-brand"></nav>
                                <div class="nav-item"><h3>Hộp Thư</h3></div>
                            </div>
                        
                    </div>
                    <div class="row">
                        <div class="col-md-4 border">
                            <div id="mail"></div>
                        </div>
                        <div class="col-md-8 border">
                            
                            <div id="messages"></div>
                            
                        </div>
                    
                    </div>
                
                </div>
            </div>
        </div>

    </body>
</html>