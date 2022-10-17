function first_char(str)
{
   regexp = /^[A-Z]/;
   if (regexp.test(str))
    {
      console.log("First character is uppercase.");
    } 
    else
    {
      console.log("First character is not uppercase.");
    }
}
first_char('Suresh');
first_char('rahul');