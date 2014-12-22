class ContactsController < ApplicationController

  def new
    @contact = Contact.new
  end

  def create
    @contact = Contact.new(contact_params)
    if @contact.save
      flash[:success] = "Your message has been sent. Thank you!"
    end
    redirect_to new_contact_path
  end

  private
    def contact_params
      params.require(:contact).permit(:name, :email, :message)
    end

end
