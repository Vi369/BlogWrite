class ApiError extends Error{
    constructor(
        statusCode,
        message = "Something went wrong!",
        errors = [],
        stack = ""
    ){
        // Call the parent class constructor with the message
        super(message)

        // additional properties for Api Error
        this.success = false
        this.statusCode = statusCode;
        this.message = message;
        this.data = null;
        this.errors = errors;

        // Checking if a stack trace is provided, otherwise capture a new stack trace
        if(stack){
            this.stack = stack;
        }else{
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

export default ApiError;
