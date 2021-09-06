        $(document).ready(function() {
        $("#signup-form").validate({
        rules:{
        fname:{
            required:true,
            maxlength:10
        },
        sname:{
            required:true,
            maxlength:8
        },
        emailid:{
            required:true,
            email:true
        },
        password:{
            minlength:5
        },
        Day:{
            required:true
        },
        Month:{
            required:true
        },
        Year:{
            required:true
        },
        Gender:{
            required:true
        }
    },
    messages:{
        fname:{
        maxlength:"Should be less than 10 characters"
        },
        password:{
        minlength:"Password should contain min 5 characters"    
        }

    }
        })
        
    })