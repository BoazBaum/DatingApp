namespace API.Errors
{
    public class ApiException
    {
        public ApiException(int starusCode, string message, string details)
        {
            StarusCode = starusCode;
            Message = message;
            Details = details;
        }

        public int StarusCode { get; set; }

        public string Message { get; set; }

        public string Details { get; set; }
    }
}