# Example:
 #
 # {% fig This is my caption! http://site.com/link.html Link Caption %}
 #   {% img center http://site.com/images/mylinks.png A collection of my favorite links %}
 # {% endfig %}
 #
 # Output:
 #
 # <figure class='center'>
 #    <img class="center" src="http://site.com/images/mylinks.png" title="A collection of my favorite links" >
 #    <figcaption>This is my caption!<a href='http://site.com/link.html'>Link Caption </a></figcaption>
 #</figure>
 #
 #

 module Jekyll

   class FigureTag < Liquid::Block
     include TemplateWrapper
     CaptionUrl = /(\S[\S\s]*)\s+(https?:\/\/\S+)\s+(.+)/i
     Caption = /(\S[\S\s]*)\s+(.+)/
     def initialize(tag_name, markup, tokens)
       @title = nil
       @caption = nil
       if markup =~ CaptionUrl
         @caption = "<figcaption>#{$1}<a href='#{$2}'>#{$3}</a></figcaption>"
       elsif markup =~ Caption
       	 @figClass = $2
         @caption = "<figcaption>#{$1}</figcaption>"
       end
       super
     end

     def render(context)
       output = super
       fig = super
       source = "<figure class='#{@figClass}''>"
       markdown = RDiscount.new(fig.lstrip).to_html[/<p>(.+)<\/p>/i]
       source += $1
       source += @caption if @caption
       source += "</figure>"
       source = source
       source
     end
   end
 end

 Liquid::Template.register_tag('fig', Jekyll::FigureTag)