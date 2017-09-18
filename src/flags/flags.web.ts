import { style } from "typestyle"

export const flags: any = {
	flag: style({
		width: "2rem", 
		height: "1.4rem",
		backgroundSize: "contain"
	}),
	Adelaide: style({backgroundImage: "url(\"" + require("./Adelaide.jpg") + "\")"}),
	Brisbane: style({backgroundImage: "url(\"" + require("./Brisbane.jpg") + "\")"}),
	Carlton: style({backgroundImage: "url(\"" + require("./Carlton.jpg") + "\")"}),
	Collingwood: style({backgroundImage: "url(\"" + require("./Collingwood.jpg") + "\")"}),
	Essendon: style({backgroundImage: "url(\"" + require("./Essendon.jpg") + "\")"}),
	Fremantle: style({backgroundImage: "url(\"" + require("./Fremantle.jpg") + "\")"}),
	Geelong: style({backgroundImage: "url(\"" + require("./Geelong.jpg") + "\")"}),
	"Gold Coast": style({backgroundImage: "url(\"" + require("./Gold Coast.jpg") + "\")"}),
	"GWS Giants": style({backgroundImage: "url(\"" + require("./GWS Giants.jpg") + "\")"}),
	Hawthorn: style({backgroundImage: "url(\"" + require("./Hawthorn.jpg") + "\")"}),
	Melbourne: style({backgroundImage: "url(\"" + require("./Melbourne.jpg") + "\")"}),
	"North Melbourne": style({backgroundImage: "url(\"" + require("./North Melbourne.jpg") + "\")"}),
	"Port Adelaide": style({backgroundImage: "url(\"" + require("./Port Adelaide.jpg") + "\")"}),
	Richmond: style({backgroundImage: "url(\"" + require("./Richmond.jpg") + "\")"}),
	"St Kilda": style({backgroundImage: "url(\"" + require("./St Kilda.jpg") + "\")"}),
	Sydney: style({backgroundImage: "url(\"" + require("./Sydney.jpg") + "\")"}),
	"West Coast": style({backgroundImage: "url(\"" + require("./West Coast.jpg") + "\")"}),
	"Western Bulldogs": style({backgroundImage: "url(\"" + require("./Western Bulldogs.jpg") + "\")"})
}