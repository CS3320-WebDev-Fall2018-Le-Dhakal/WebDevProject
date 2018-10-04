import java.util.*;
/**
 * Write a description of class QuoteHistory here.
 * 
 * @author (your name) 
 * @version (a version number or a date)
 */
public class QuoteHistory
{
    // instance variables - replace the example below with your own
    private ArrayList<Quote> quoteList;

    /**
     * Constructor for objects of class QuoteHistory
     */
    public QuoteHistory()
    {
        quoteList = new ArrayList<Quote>();
    }
    
    public void addQuote(Quote q)
    {
        quoteList.add(q);
    }
}
