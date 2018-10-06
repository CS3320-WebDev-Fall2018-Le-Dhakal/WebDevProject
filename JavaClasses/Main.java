import java.util.*;
/**
 * Write a description of class Main here.
 * 
 * @author (your name) 
 * @version (a version number or a date)
 */
public class Main
{
    public static void main(String[] args)
    {
        ClientInformation client1 = new ClientInformation(52766, "Daniel", "22nd Street", "123-123-1234", "daniel@yahoo.com");
        
        int id = client1.getClientId();
        String name = client1.getName();
        String address = client1.getAddress();
        String phone = client1.getPhone();
        String email = client1.getEmail();
       
        System.out.println("Client Id: " + id);
        System.out.println("Client Name: " + name);
        System.out.println("Client Address: " + address);
        System.out.println("Client Phone: " + phone);
        System.out.println("Client Email: " + email);
        System.out.println();
        
        Quote quote1 = new Quote(client1.getClientId(), 40.0, "Sept. 2", "Aug. 15",
            "Austin, TX", "Sabal", "456-456-4567",
            "sabal@yahoo.com", 90.00, 3600.00);
            
        System.out.println("Quote: ");
        System.out.println("Client Id: " + quote1.getClientId());
        System.out.println("Total price: " + quote1.getTotalAmountDue());
        System.out.println();
        
        QuoteHistory quoteHist1 = new QuoteHistory();
        quoteHist1.addQuote(quote1);
        ArrayList<Quote> quoteList = quoteHist1.getQuoteList();
     
        System.out.println("Current Quote History: ");
        for (int i = 0; i < quoteList.size(); i++)
        {
            System.out.println("Quote ID: " + quoteList.get(i).getClientId());
        }
        
        
        
    }
}
