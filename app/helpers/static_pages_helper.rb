module StaticPagesHelper

  def full_title(page_title)
    base_title = "Rajanjamu"
    if page_title.empty?
      return "#{Projects} | #{base_title}"
    else
      return "#{page_title} | #{base_title}"
    end
  end
end
