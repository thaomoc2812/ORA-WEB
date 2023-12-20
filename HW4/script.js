
//Thông tin cần thay đổi để chạy, lấy ở Google Cloud Console (Vì là chế độ thử nghiệm) 

    var clientId = '633331390311-43ch0thtucm9q88clajkj0m176h22ftp.apps.googleusercontent.com';
    var clientSecret = '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';


// Lấy địa chỉ này để cho vào đường dẫn trả về URI
    var redirectUri = 'http://localhost/20205128/page.php'




    toastr.options = { positionClass: 'toast-top-center' }
    var accessToken

    $(document).on('click','#googleSignIn',function(){
       
        // alert('aok')
        var authUrl = 'https://accounts.google.com/o/oauth2/auth';
        authUrl += '?redirect_uri=' + encodeURIComponent(redirectUri);
        authUrl += '&response_type=code';
        authUrl += '&client_id=' + encodeURIComponent(clientId);
        authUrl += '&scope=' + encodeURIComponent('https://mail.google.com');
        authUrl += '&approval_prompt=force';
        window.location.href = authUrl;
        
    })
    $(document).on('click', '#send-email',function(event){
        event.preventDefault()
        createEmail(accessToken)
        $('.email-frame').hide()
        getResource(accessToken)



    })
        
    $(document).on('click', '#mail-box',function(){
        $('.email-frame').hide()
        getResource(accessToken)
    })
    $(document).on('click', '#create-mail',function(){
        $('.email-frame').show()
    })
    $(document).on('click', '.close-frame',function(){
        $('.email-frame').hide()
        
    })
    $(document).on('click','tr[data-msg-id]' ,function(){
        var messageId = $(this).data('msg-id');
        $('.email-frame').hide()
        getMessage(accessToken, messageId)
    })

    $(document).on('click', '.delete-button', function(event){
        event.stopPropagation()
        var messageId = $(this).data('msg-id')
        deleteEmail(accessToken, messageId)
        
    })

    getAuthorizationCode()
    function getAuthorizationCode() {
        var urlParams = new URLSearchParams(window.location.search);
        var authCode = urlParams.get('code');
        if (authCode) {
            
            
            getAccessToken(authCode)
            
        }
    }
    function getAccessToken(authCode){    
        $.ajax({
            url: 'https://accounts.google.com/o/oauth2/token',
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            dataType: 'json',
            data: {
                grant_type: 'authorization_code',
                code: authCode,
                client_id: clientId,
                client_secret: clientSecret,
                redirect_uri: redirectUri
            },
            success: function(response){
                var access_token = response.access_token
                getResource(access_token)
                accessToken = access_token
            },
            error: function(xhr, status, error){
                toastr.success('Error Get Access Token' + error, '', { timeOut: 3000 })
            }
        })
    }

    function getResource(access_token){
        $.ajax({
            url: 'https://www.googleapis.com/gmail/v1/users/me/messages',
            method: 'GET',
            dataType: 'json',
            headers: {
                Authorization: 'Bearer ' + access_token
            },
            success:function(response){
                var str = ""
                var table = '<table><tr><th>Title</th></tr>'
                
                $.each(response.messages, function(index, message) {
                    table += '<tr class="row item-mail border" data-msg-id="' + message.id + '">'
                    table += '<td class="email-subject"></td>'
                    
                    table += '<td>' + '<button class="delete-button" data-msg-id="' + message.id + '"><i class="fa-regular fa-trash-can" style="color: #00040a;"></i></button>' + '</td>'
                    table += '</tr>'
                    getTitle(access_token, message.id)
                    
                });
                
                table += '</table>'
                
                $('#mail').html(table)
            },
            error: function(xhr, status, error){
                toastr.success('Lỗi get mail' + error, '', { timeOut: 3000 })
            }
        })
    }


    function getMessage(access_token, messageId){
        $.ajax({
            url: 'https://www.googleapis.com/gmail/v1/users/me/messages/' + messageId,
            method: 'GET',
            dataType: 'json',
            headers: {
                Authorization: 'Bearer ' + access_token
            },
            success: function(response){

                // $('#messages').text(response.snippet)
                $('#messages').text(JSON.stringify(response))
                
            },
            error: function(xhr, status, error){
                toastr.success('Lỗi email' + error, '', { timeOut: 3000 })
            }
            
        })
    }

    function deleteEmail(access_token, messageId){
        $.ajax({
            url: 'https://www.googleapis.com/gmail/v1/users/me/messages/' + messageId,
            method: 'DELETE',
            headers: {
                Authorization: 'Bearer ' + access_token
            },
            success: function(response) {
                console.log('Email đã bị xóa thành công:', response)
                
            },
            error: function(xhr, status, error) {
                toastr.success('Lỗi khi xoá email:' + error, '', { timeOut: 3000 })

            },
            complete: function(xhr, status){
                toastr.success('Xoá email thành công', '', { timeOut: 3000 })
                getResource(accessToken)

            }
        })
    }

    function createEmail(access_token) {
        var emailTo = $('#email-to').val();
        var subject = $('#email-subject').val();
        var message = $('#email-message').val();
        var fileInput = $('#file-input')[0].files[0];
        
        if (fileInput) {
            var reader = new FileReader();
            reader.onloadend = function () {
            var attachmentData = reader.result.split(',')[1]; // Lấy dữ liệu tệp tin đính kèm dưới dạng Base64
            sendEmail(emailTo, subject, message, attachmentData, access_token);
            };
            reader.readAsDataURL(fileInput);
        } else {
            sendEmail(emailTo, subject, message, null, access_token);
        }
        }
        
        function sendEmail(emailTo, subject, message, attachmentData, access_token) {
        var email = {
            to: emailTo,
            subject: subject,
            message: message,
            attachment: attachmentData
        };
        
        var rawEmail =
            'From: YOUR_EMAIL\n' +
            'To: ' + email.to + '\n' +
            'Subject: ' + email.subject + '\n' +
            'Content-Type: multipart/mixed; boundary="boundary"\n\n' +
            '--boundary\n' +
            'Content-Type: text/plain; charset="UTF-8"\n' +
            '\n' +
            email.message + '\n\n';
        
        if (email.attachment) {
            rawEmail +=
            '--boundary\n' +
            'Content-Type: application/octet-stream\n' +
            'Content-Disposition: attachment; filename="attachment.txt"\n' +
            'Content-Transfer-Encoding: base64\n' +
            '\n' +
            email.attachment + '\n\n';
        }
        
        rawEmail += '--boundary--';
        
        $.ajax({
            url: 'https://www.googleapis.com/gmail/v1/users/me/messages/send',
            method: 'POST',
            headers: {
            Authorization: 'Bearer ' + access_token,
            'Content-Type': 'application/json'
            },
            dataType: 'json',
            data: JSON.stringify({
            raw: btoa(rawEmail)
            }),
            success: function(response) {
            console.log('Email đã được tạo và gửi thành công:', response);
            },
            error: function(xhr, status, error) {
            toastr.success('Lỗi khi gửi email' + error, '', { timeOut: 3000 });
            },
            complete: function(xhr, status) {
            toastr.success('Email đã được gửi thành công', '', { timeOut: 3000 });
            getResource(access_token);
            }
        });
        }
        

    function getTitle(access_token, messageId) {
        $.ajax({
            url: 'https://www.googleapis.com/gmail/v1/users/me/messages/' + messageId,
            method: 'GET',
            dataType: 'json',
            headers: {
                Authorization: 'Bearer ' + access_token
            },
            success: function(email) {
                var subject = getEmailSubject(email);
                $('tr[data-msg-id="' + messageId + '"] td.email-subject').text(subject);
            },
            error: function(xhr, status, error) {

                toastr.success('Error Get Mail:' + error, '', { timeOut: 3000 })

            }
        });

        function getEmailSubject(email) {
            var headers = email.payload.headers;
            for (var i = 0; i < headers.length; i++) {
                if (headers[i].name === 'Subject') {
                    return headers[i].value;
                }
            }
            return '';
        }
    }



   
