
/**
 * Write a description of class ClientInformation here.
 * 
 * @Daniel Le and Sabal Dhakal
 * @version (a version number or a date)
 */
public class ClientInformation
{
    // instance variables - replace the example below with your own
    private int clientId;
    private String name;
    private String address;
    private String phone;
    private String email;

    /**
     * Constructor for objects of class ClientInformation
     */
    public ClientInformation()
    {
    }
    
    public ClientInformation(int clientId, String name, String address, String phone, String email)
    {
        this.clientId = clientId;
        this.name = name;
        this.address = address;
        this.phone = phone;
        this.email = email;
    }
    
    public int getClientId()
    {
        return clientId;
    }
    
    public void setClientID(int clientId)
    {
        this.clientId = clientId;
    }
    
    public String getName()
    {
        return name;
    }
    
    public void setName(String name)
    {
        this.name = name;
    }
    
    public String getAddress()
    {
        return address;
    }
    
    public void setAddress(String address)
    {
        this.address = address;
    }
    
    public String getPhone()
    {
        return phone;
    }
    
    public void setPhone(String phone)
    {
        this.phone = phone;
    }
    
    public String getEmail()
    {
        return email;
    }
    
    public void setEmail(String email)
    {
        this.email = email;
    }
}
