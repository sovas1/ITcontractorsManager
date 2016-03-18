package org.sovas.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class Home {

   /* private static final String info =
            "Welcome in IT Contractor Manager.\n" +
                    "Options:\n" +
                    "value = /info  |  method = GET   <-- shows info screen\n" +
                    "value = /company  |  method = POST  |  @BodyRequired  <-- add a Company\n" +
                    "value = /company  |  method = GET  <-- shows all Company\n";*/

    @RequestMapping(value = "/")
    public String home() { return "index"; }

}
