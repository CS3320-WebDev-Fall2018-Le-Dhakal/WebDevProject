import java.util.*;
/**
 * Write a description of class Quote here.
 * 
 * @Daniel Le and Sabal Dhakal
 * @version (a version number or a date)
 */
public class Quote
{
    private int clientId;
    private double gallonsRequested;
    private Date deliveryDate;
    private Date requestDate;
    private String deliveryLocation;  
    private String deliveryContactName;
    private String deliveryContactPhone;
    private String deliveryContactEmail;
    private double suggestedPrice;
    private double totalAmountDue;
    
    
    public Quote() { 	
    }
    
    public Quote(int clientId, double gallonsRequested, Date deliveryDate, Date requestDate,
			String deliveryLocation, String deliveryContactName, String deliveryContactPhone,
			String deliveryContactEmail, double suggestedPrice, double totalAmountDue) {
		super();
		this.clientId = clientId;
		this.gallonsRequested = gallonsRequested;
		this.deliveryDate = deliveryDate;
		this.requestDate = requestDate;
		this.deliveryLocation = deliveryLocation;
		this.deliveryContactName = deliveryContactName;
		this.deliveryContactPhone = deliveryContactPhone;
		this.deliveryContactEmail = deliveryContactEmail;
		this.suggestedPrice = suggestedPrice;
		this.totalAmountDue = totalAmountDue;

	}

	public int getClientId() {
		return clientId;
	}

	public void setClientId(int clientId) {
		this.clientId = clientId;
	}

	public double getGallonsRequested() {
		return gallonsRequested;
	}

	public void setGallonsRequested(double gallonsRequested) {
		this.gallonsRequested = gallonsRequested;
	}

	public Date getDeliveryDate() {
		return deliveryDate;
	}

	public void setDeliveryDate(Date deliveryDate) {
		this.deliveryDate = deliveryDate;
	}

	public Date getRequestDate() {
		return requestDate;
	}

	public void setRequestDate(Date requestDate) {
		this.requestDate = requestDate;
	}

	public String getDeliveryLocation() {
		return deliveryLocation;
	}

	public void setDeliveryLocation(String deliveryLocation) {
		this.deliveryLocation = deliveryLocation;
	}

	public String getDeliveryContactName() {
		return deliveryContactName;
	}

	public void setDeliveryContactName(String deliveryContactName) {
		this.deliveryContactName = deliveryContactName;
	}

	public String getDeliveryContactPhone() {
		return deliveryContactPhone;
	}

	public void setDeliveryContactPhone(String deliveryContactPhone) {
		this.deliveryContactPhone = deliveryContactPhone;
	}

	public String getDeliveryContactEmail() {
		return deliveryContactEmail;
	}

	public void setDeliveryContactEmail(String deliveryContactEmail) {
		this.deliveryContactEmail = deliveryContactEmail;
	}

	public double getSuggestedPrice() {
		return suggestedPrice;
	}

	public void setSuggestedPrice(double suggestedPrice) {
		this.suggestedPrice = suggestedPrice;
	}

	public double getTotalAmountDue() {
		//Total amount will be generated here.
		return totalAmountDue;
	}

	public void setTotalAmountDue(double totalAmountDue) {
		this.totalAmountDue = totalAmountDue;
	}
}
