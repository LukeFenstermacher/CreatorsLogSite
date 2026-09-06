const heroHeader = document.querySelector(".hero-header");
const navLogo = document.querySelector(".nav-logo");
const navItems = document.querySelectorAll(".nav-item");
const dropdownMenus = document.querySelectorAll(".dropdown-menu");
const dropdownItems = document.querySelectorAll(".dropdown-item");
const content = document.getElementById("landing");

let globalGalleryInterval = null;
let scrollTimeout;

console.log("Nav items found:", navItems.length);
console.log("Content:", content);

/********************************* CREATOR'S LOG *********************************/

const creators_log_content = `
<section class="project-entry">

    <div class="project-media">
        <iframe src="https://www.youtube.com/embed/nP5YaER9fQU?si=WbR5n75rONA6YYXm" title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
        </iframe>
    </div>

    <div class="project-notes">

        <h1>Welcome to Creator's Log</h1>
        <p>
            I'm Luke—thanks for taking some time to join on a journey of projects, exploring, and endless learning. My entire life, I've always been one to create;
            from mixing Lego sets and elementary school art sculptures to custom lamp builds and robots, I could never get enough of making things that have never
            been made before. While my arsenal of skills is never complete, I always challenge myself in making something <i>new</i>.
        </p>
        <p>
            Today, I'm a full time automotive engineer with more free time and resources to make things happen than I've ever had before. With this newfound
            freedom, the ideas, builds, and adventures are only getting bigger, more elaborate, and (always) more creative. Each day is a new opportunity for
            more outside-of-the-box thinking and learning.  
        </p>
        <p>
            Aside from living in my camera roll, my projects, knowledge, and experiences have become more and more scattered—I thought it was time for something
            new. On this site, you'll find the videos, pictures, and breakdowns on some of my favorite creations. Kick back, relax, and enjoy your stay.
            This is Creator's Log.
        </p>

    </div>

</section>
`;

/********************************* AUTOMOTIVE *********************************/

const automotive_content = `
<section class = "appendix">

    <h1>Automotive</h1>

    <p>Projects ranging from mods and electrical to classic wrenching.
    </p>

    <div class = "project-summary" data-page = "zj_front_end" data-parent = "automotive">

        <h2>ZJ Front End Rebuild</h2>

        <div class = "project-summary-content">

            <div>

                <img src = "Assets/Automotive/ZJFrontEnd/ZJ_Prog.jpg">

            </div>

            <div>

                <p>After buying a 1994 Jeep Grand Cherokee Laredo (and limping it 100 miles back home), I spent the summer restoring some of the former glory
                to this diamond in the rough.</p>

            </div>

        </div>

    </div>

</section>
`;

const zj_front_end_content = `
<section class="project-entry">

    <div class = "project-media">

        <div class = "active-image-container">
            <img id = "active_image" src = "Assets/Automotive/ZJFrontEnd/ZJ_Prog.jpg">
        </div>

        <div class = "lower-media-strip">

            <div class = "media-controls pinned-thumbnail auto-play" id = "auto-play" title = "Resume Autoplay">
                <span class = "icon">■</span>
            </div>

            <div class = "thumbnail-strip" id = "thumbnail-strip">

                <img class = "thumbnail active" src = "Assets/Automotive/ZJFrontEnd/ZJ_Prog.jpg" data-index = "0">
                <img class = "thumbnail" src = "Assets/Automotive/ZJFrontEnd/ZJ1.jpg" data-index = "1">
                <img class = "thumbnail" src = "Assets/Automotive/ZJFrontEnd/ZJ2.jpg" data-index = "2">
                <img class = "thumbnail" src = "Assets/Automotive/ZJFrontEnd/ZJ3.jpg" data-index = "3">
                <img class = "thumbnail" src = "Assets/Automotive/ZJFrontEnd/ZJ4.jpg" data-index = "4">
                <img class = "thumbnail" src = "Assets/Automotive/ZJFrontEnd/ZJ5.jpg" data-index = "5">
                <img class = "thumbnail" src = "Assets/Automotive/ZJFrontEnd/ZJ6.jpg" data-index = "6">
                <img class = "thumbnail" src = "Assets/Automotive/ZJFrontEnd/ZJ7.jpg" data-index = "7">
                <img class = "thumbnail" src = "Assets/Automotive/ZJFrontEnd/ZJ8.jpg" data-index = "8">
                <img class = "thumbnail" src = "Assets/Automotive/ZJFrontEnd/ZJ9.jpg" data-index = "9">
                <img class = "thumbnail" src = "Assets/Automotive/ZJFrontEnd/ZJ10.jpg" data-index = "10">
                <img class = "thumbnail" src = "Assets/Automotive/ZJFrontEnd/ZJ_Diff.jpg" data-index = "11">
                <img class = "thumbnail" src = "Assets/Automotive/ZJFrontEnd/ZJ11.jpg" data-index = "12">
                <img class = "thumbnail" src = "Assets/Automotive/ZJFrontEnd/ZJ12.jpg" data-index = "13">
                <img class = "thumbnail" src = "Assets/Automotive/ZJFrontEnd/ZJ13.jpg" data-index = "14">
                <img class = "thumbnail" src = "Assets/Automotive/ZJFrontEnd/ZJ14.jpg" data-index = "15">
                <img class = "thumbnail" src = "Assets/Automotive/ZJFrontEnd/ZJ15.jpg" data-index = "16">
                <img class = "thumbnail" src = "Assets/Automotive/ZJFrontEnd/ZJ16.jpg" data-index = "17">
                <img class = "thumbnail" src = "Assets/Automotive/ZJFrontEnd/ZJ17.jpg" data-index = "18">
                <img class = "thumbnail" src = "Assets/Automotive/ZJFrontEnd/ZJ18.jpg" data-index = "19">
                <img class = "thumbnail" src = "Assets/Automotive/ZJFrontEnd/ZJ19.jpg" data-index = "20">
                <img class = "thumbnail" src = "Assets/Automotive/ZJFrontEnd/ZJ20.jpg" data-index = "21">
                <img class = "thumbnail" src = "Assets/Automotive/ZJFrontEnd/ZJ21.jpg" data-index = "22">
                <img class = "thumbnail" src = "Assets/Automotive/ZJFrontEnd/ZJ_Rear.jpg" data-index = "23">
                <img class = "thumbnail" src = "Assets/Automotive/ZJFrontEnd/ZJ22.jpg" data-index = "24">
                <img class = "thumbnail" src = "Assets/Automotive/ZJFrontEnd/ZJ23.jpg" data-index = "25">
                <img class = "thumbnail" src = "Assets/Automotive/ZJFrontEnd/IACV.jpg" data-index = "26">
                <img class = "thumbnail" src = "Assets/Automotive/ZJFrontEnd/ZJ_Brakes.jpg" data-index = "27">
                <img class = "thumbnail" src = "Assets/Automotive/ZJFrontEnd/ZJ_S.jpg" data-index = "28">
                <img class = "thumbnail" src = "Assets/Automotive/ZJFrontEnd/ZJ_S1.jpg" data-index = "29">
                <img class = "thumbnail" src = "Assets/Automotive/ZJFrontEnd/ZJ_S2.jpg" data-index = "30">
                <img class = "thumbnail" src = "Assets/Automotive/ZJFrontEnd/ZJ_S3.jpg" data-index = "31">
                <img class = "thumbnail" src = "Assets/Automotive/ZJFrontEnd/ZJ_S4.jpg" data-index = "32">
                <img class = "thumbnail" src = "Assets/Automotive/ZJFrontEnd/ZJ_S5.jpg" data-index = "33">
                <img class = "thumbnail" src = "Assets/Automotive/ZJFrontEnd/ZJ_S6.jpg" data-index = "34">
                <img class = "thumbnail" src = "Assets/Automotive/ZJFrontEnd/ZJ_Transmission.jpg" data-index = "35">
                <img class = "thumbnail" src = "Assets/Automotive/ZJFrontEnd/ZJ_ValveBody.jpg" data-index = "36">
                <img class = "thumbnail" src = "Assets/Automotive/ZJFrontEnd/ZJ_Fin.jpg" data-index = "37">

            </div>

        </div>

    </div>

    <div class="project-notes">
    
        <h1>ZJ Front End Rebuild</h1>

        <p>This is Mudbox. Mudbox really needed some TLC. This 1994 Jeep Grand Cherokee (ZJ) had been through a lot (most of which
        is a mystery to me). With the 4.0L Jeep/AMC inline six, 97k miles, and barely any rust on the underbody, I jumped on this marketplace deal as
        soon as I could. The price tag was quite low, so I knew the SUV was coming home with me regardless of the driveline's condition. I drove 100 miles
        back home with sloppy steering, a stuck caliper, no automatic shifting, and a strange clanking noise coming from the driver's side. I put the
        following on the list to be fixed as immediate needs:</p>

        <ul class = "dash-list">
            <li>Oil and Filter Change</li>
            <li>Steering Refresh and Bushings</li>
            <li>Various Transmission Issues</li>
            <li>Ball Joints</li>
            <li>CV Axles</li>
            <li>Brakes</li>
            <li>Front/Rear Shocks</li>
            <li>Wheel Bearings/Hubs</li>
            <li>Rust Proofing</li>
        </ul>

        <p>And the rest became wants or preventative maintenance that might be convenient "while I'm already there":</p>
        
        <ul class = "dash-list">
            <li>Transmission Fluid Change</li>
            <li>Transmission Pan Replacement</li>
            <li>Differential Fluid Change</li>
            <li>Axle Shaft Seals</li>
            <li>Front/Rear Coil Springs (2" - 3" Lift)</li>
        </ul>

        <p>Some "nice-to-have" items that I put on the back burner for future projects included:</p>
    
        <ul class = "dash-list">
            <li>New Head Unit (No Radio???)</li>
            <li>Larger Wheels (Differential Regearing First)</li>
            <li>Ladder</li>
            <li>Custom Roof Racks</li>
            <li>Custom Bumpers</li>
            <li>Off-Road Lighting</li>
        </ul>

        <p>With a basic socket set from Harbor Freight and some help from YouTube, I got started disassembling the front half of the ZJ.
        First, the wheels came off, then the calipers and rotors, then the steering system and sway bar/bushings. The wheel bearing/hub removal gave
        me a run for my money, but a sledgehammer and some patience did the trick. After removing the  wheel bearings, brake dust shields, CV axles,
        coil springs, shocks, and track bar, the only things holding the axle to the vehicle were the control arms and the front driveshaft. With
        plans for a small lift, I went with new adjustable control arms and track bars, which would significantly reduce the likelihood
        of death wobble. Twelve bolts later, I got some help from my longboard to take my front axle to the yard for some deep cleaning.</p>

        <p>After revealing some rust under all of the mud on this Dana 30 axle, I removed the upper control arm bushings, knuckles, ball joints, and
        ABS sensor brackets. A wire wheel became my best friend for a few hours, taking off all the surface rust that had developed on this hunk of steel.
        A few sprays of degreaser later, the axle was ready for rust proofing. Using a paintbrush, I applied Eastwood Rust Encapsulator Plus in two coats
        and finished off with sprayable top coat, yielding three layers of protection. 
        </p>

        <p>The last step of true disassembly for the front end work was taking off the differential pan, removing the gears, and pushing the seals out.
        With this complete, it was time to flip the lever on the ratchet back to tightening and start the install. Putting the differential back together
        meant pressing in new axle shaft seals (I got to use a fun new tool for that), putting the carrier assembly back in, and placing RTV around the
        housing to create a gasket, sealing the new differential pan. The kit with a new pan I got included both fill and drain holes; the kit did not
        include the proper bolts, though, so I got to purchase a bolt extractor kit as well.
        </p>

        <p>After reassembling the differential, I pressed in the new ball joints and upper control arm bushings, attached the new knuckles, and then the
        axle was ready to get attached back on the Jeep. While the process is simple in theory, I found practice different—adjusting, readjusting, and
        readjusting all four control arms a few more times, I bolted the differential yoke back to the front driveshaft, installed new coil spring seats
        (more tedious than you'd imagine), attached new coil springs I painted, and bolted on new shocks. The ZJ was finally supporting its own front axle
        again.  
        </p>

        <p>Once the axle was back on, assembly was mostly straightforward; new CV axles went in, then brake dust shields, wheel bearings/hubs, rotors,
        calipers, brake pads, and track bar. After some more toying with the track bar's alignment, I reattached the ABS sensors, and then moved on to
        steering. With a few tie rods, a steering damper, and a quick string wheel alignment, Mudbox was getting ready to drive again.</p>

        <p>There were a couple little odds and ends I completed during the rebuild. Moving the Jeep into the garage before I started, the engine
        stalled at idle in reverse—I cleaned the Idle Air Control Valve sensor, and it hasn't happened since. I installed a new upstream O2 sensor, and
        that got rid of an exhaust-related OBD-I code that showed up on the initial drive home. New calipers meant introducing air to the system, so I
        learned how to bleed brakes. An oil change was necessary, since I had no service records on the ZJ. The rear suspension was only a few bolts, so I
        swapped rear coil springs and shocks without too much hassle. Ignition was pretty rough, so the 4.0 got a new distributor cap, ignition coil,
        spark plugs, and spark plug wires. When fiddling with my 42RE transmission, I replaced the governor pressure sensor, governor solenoid, accumulator
        spring, and transmission filter, and it got a new pan as well (with a drain plug). As always, there were some hiccups along the way, but the
        progress started to show.</p>

        <p>When the vehicle was finally placed back on the ground, I torqued all suspension components, made sure everything was greased, filled up on
        transmission fluid, and rolled the vehicle out of the garage. With a new battery, some fine tuning of the transmission fluid level, and some
        persistence, the ZJ was back on the road. While it still has some "quirks" (doesn't shift automatically, bumpy reverse, no O/D or 1st, off-center
        alignment, broken windows, bad door lock cylinder, shorting turn signals, clicking relays, an imbalanced fan, a leaking water pump, peeling
        clearcoat, a wood rear bumper??), the quirks are what make Mudbox special—and coincidentally, what will keep me busy for the next year or two.</p>

    </div>
    
</section>
`;


/********************************* DIY *********************************/

const diy_content = `
<section class = "appendix">

    <h1>DIY</h1>

    <p>From longboards to lamps, take a peek into some of the small projects I've worked on over the last few years.
    </p>

    <div class = "project-summary" data-page = "longboards" data-parent = "diy">

        <h2>Longboard Builds</h2>

        <div class = "project-summary-content">

            <div>

                <img src = "Assets/DIY/LongboardBuilds/FullBoards.jpg">

            </div>

            <div>

                <p>My first major project—this longboard deck built from scratch and assembled by hand gave me confidence in bringing ideas to life.
                Its untimely demise in a battle with a sidewalk sparked innovation in a new design with lessons learned.</p>

            </div>

        </div>

    </div>

    <div class = "project-summary" data-page = "copper_lamp" data-parent = "diy">

        <h2>Copper Lamp</h2>

        <div class = "project-summary-content">

            <div>

                <img src = "Assets/DIY/CopperLamp/CopperLamp_4_3.jpg">

            </div>

            <div>

                <p>Expanding my horizons when it comes to blending form and function, I combined rustic materials with contemporary ideas for a piece
                that shines whether on or off.</p>

            </div>

        </div>

    </div>

    <div class = "project-summary" data-page = "wooden_lamp" data-parent = "diy">

        <h2>Wooden Lamp</h2>

        <div class = "project-summary-content">

            <div>

                <img src = "Assets/DIY/WoodenLamp/WoodenLamp_4_3.jpg">

            </div>

            <div>

                <p>Walking through the process of designing, fabricating, wiring, and assembling a wooden box lamp.</p>

            </div>

        </div>

    </div>

</section>
`;

const longboards_content = `
<section class="project-entry">

    <div class = "project-media">

        <div class = "active-image-container">
            <img id = "active_image" src = "Assets/DIY/LongboardBuilds/FullBoards.jpg">
        </div>

        <div class = "lower-media-strip">

            <div class = "media-controls pinned-thumbnail auto-play" id = "auto-play" title = "Resume Autoplay">
                <span class = "icon">■</span>
            </div>

            <div class = "thumbnail-strip" id = "thumbnail-strip">

                <img class = "thumbnail active" src = "Assets/DIY/LongboardBuilds/FullBoards.jpg" data-index = "0">
                <img class = "thumbnail" src = "Assets/DIY/LongboardBuilds/LB1.jpg" data-index = "1">
                <img class = "thumbnail" src = "Assets/DIY/LongboardBuilds/LB2.jpg" data-index = "2">
                <img class = "thumbnail" src = "Assets/DIY/LongboardBuilds/LB3.jpg" data-index = "3">
                <img class = "thumbnail" src = "Assets/DIY/LongboardBuilds/LB4.jpg" data-index = "4">
                <img class = "thumbnail" src = "Assets/DIY/LongboardBuilds/LB5.jpg" data-index = "5">
                <img class = "thumbnail" src = "Assets/DIY/LongboardBuilds/LB6.jpg" data-index = "6">
                <img class = "thumbnail" src = "Assets/DIY/LongboardBuilds/LB7.jpg" data-index = "7">
                <img class = "thumbnail" src = "Assets/DIY/LongboardBuilds/LB8.jpg" data-index = "8">
                <img class = "thumbnail" src = "Assets/DIY/LongboardBuilds/LB9.jpg" data-index = "9">
                <img class = "thumbnail" src = "Assets/DIY/LongboardBuilds/LB10.jpg" data-index = "10">
                <img class = "thumbnail" src = "Assets/DIY/LongboardBuilds/LB11.jpg" data-index = "11">
                <img class = "thumbnail" src = "Assets/DIY/LongboardBuilds/LB12.jpg" data-index = "12">
                <img class = "thumbnail" src = "Assets/DIY/LongboardBuilds/LB13.jpg" data-index = "13">
                <img class = "thumbnail" src = "Assets/DIY/LongboardBuilds/LB14.jpg" data-index = "14">

            </div>

        </div>

    </div>

    <div class="project-notes">
    
        <h1>Longboard Builds</h1>
        <p>The first truly impactful project I built on my own was my first longboard—almost as impactful as the sidewalk 
        (which inspired me to build my second longboard).</p>

        <p>After a few months of being cooped up in Covid lockdown, I was looking for a more exciting way to get fresh air than 
        jogging. I loved longboarding from the two times I tried it prior; I found I loved the price tag on a board less. As the 
        proud owner of a rusty handsaw and sandpaper, I felt like saving some money while picking up new skills was a win-win.</p>
        
        <p>Taking some classes at YouTube University, I learned about longboard trucks, Baltic birch, and gluing sheets of wood 
        together pre-bowed to counteract my weight. I ordered trucks, wheels, and grip tape online, and did a dry assembly after 
        cutting out somewhat of a symmetrical bowling pin shape. A neat little string wheel alignment gave me a functional rolling 
        board; a blank canvas rolling around didn't sit right with my creative side, though. Three Sharpies and some conservative 
        use of grip tape later, I had a project I was really proud of.</p>
        
        <p>After a solid two months of longboarding, a crack in the sidewalk made the board a little shorter. Once I came back to 
        my senses, it was clear that I had made a critical design mistake. With a thick board and short bolts from the kit I 
        bought, I had to sink the bolts much farther thank I would have liked. They ended up way too deep beyond the surface, 
        reducing the overall strength of the board and giving the bottom two layers ample reason to separate from the top. Very 
        grounding lesson.</p>
        
        <p>I still keep that board around as an art piece, but the "shortboard" wasn't much use in practicality. With some 
        upgraded tools and knowledge, another board was finished much faster than the first. Using washers, lock nuts, and much 
        longer 10-32 socket cap bolts, I made sure the same failure mode wasn't happening again. New design principles called for 
        a new look. The bottom got galaxies, the top got stars, and I got a board with a much stronger design. Countless miles, 
        some off-road trips, and an SUV axle swap later, it's still rolling... and might need some new bearings.</p>
    
    </div>
    
</section>
`;

const copper_lamp_content = `
<section class="project-entry">

    <div class="project-media">
        <iframe class = "short" src="https://youtube.com/embed/cyEFxNRVBH0?si=QeCeblULLxWX6x3r" title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
        </iframe>
    </div>

    <div class="project-notes">
    
        <h1>Copper Lamp</h1>

        <p>While it wasn't the first lamp I ever made, this copper lamp was integral to my newfound passion for combining form and function.
        Made from roughly five feet of copper pipe from Home Depot, this lamp isn't overly complex, but it gave me a great foundation for
        expanding my horizons of what I could make.</p>

        <p>After having the rough idea, I designed this lamp in SOLIDWORKS (a good learning experience beyond my Autodesk Inventor roots).
        Once it was complete and ready to be fabricated, I scrapped the idea entirely and started from scratch. The first design looked weird.
        I crafted a second design (trust me, this one is cooler), and THEN I was ready to build it.</p>

        <p>I listed out what lengths of pipe I would need based my CAD, then I got in the groove of cutting up the pieces. This led into
        slight roughing up of the pipe ends to prepare them for gluing into their fittings. I debated soldering these, but this wasn't for
        plumbing, and I wanted it to look clean, so I went with a liquid copper adhesive, and I had no complaints.</p>

        <p>Once all pieces were cut, prepped, and drilled to accommodate the wire, it was time for assembly. The wiring took a bit of
        creativity, looping the wire around the base to ensure that pulling on the cord would be a lot less likely to yank the wires out of
        the bulb sockets and cause issues. I used an inline switch, plug, and bulb holders that I felt complemented the design. Vintage-style
        Edison bulbs were the finishing touch that I believe brought this lamp's appearance together and completed one of the more important
        lamps I've created.</p>
    
    </div>

</section>
`;

const wooden_lamp_content = `
<section class="project-entry">

    <div class="project-media">
        <iframe src="https://www.youtube.com/embed/IX1omD__ids?si=UurSsy2WRizViIUj" title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
        </iframe>
    </div>

    <div class="project-notes">
    
        <h1>Wooden Lamp</h1>

        <p>In this video, I walk through the process of designing, fabricating, wiring, and assembling this wooden box lamp from start to
        finish. Exploring a simplistic form and lit appearance, I developed this project to experiment with a concept that employs a 
        minimalistic theme but still delivers function.
        </p>
    
    </div>

</section>
`;

/********************************* HOME IMPROVEMENT *********************************/

const home_content = `
<section class = "appendix">

    <h1>Home Improvement</h1>

    <p>Taking a look into some of the work I've done to make my spaces feel more like home.
    </p>

    <div class = "project-summary" data-page = "bedroom_refresh" data-parent = "diy">

        <h2>Bedroom Refresh</h2>

        <div class = "project-summary-content">

            <div>

                <img src = "Assets/HomeImprovement/BedroomRefresh/BR3.jpg">

            </div>

            <div>

                <p>My first major project—this longboard deck built from scratch and assembled by hand gave me confidence in bringing ideas to life.
                Its untimely demise in a battle with a sidewalk sparked innovation in a new design with lessons learned.</p>

            </div>

        </div>

    </div>

</section>
`;
const bedroom_refresh_content = `
<section class="project-entry">

    <div class = "project-media">

        <div class = "active-image-container">
            <img id = "active_image" src = "Assets/HomeImprovement/BedroomRefresh/BR1.jpg">
        </div>

        <div class = "lower-media-strip">

            <div class = "media-controls pinned-thumbnail auto-play" id = "auto-play" title = "Resume Autoplay">
                <span class = "icon">■</span>
            </div>

            <div class = "thumbnail-strip" id = "thumbnail-strip">

                <img class = "thumbnail active" src = "Assets/HomeImprovement/BedroomRefresh/BR1.jpg" data-index = "0">
                <img class = "thumbnail" src = "Assets/HomeImprovement/BedroomRefresh/BR2.jpg" data-index = "1">
                <img class = "thumbnail" src = "Assets/HomeImprovement/BedroomRefresh/BR3.jpg" data-index = "2">
                <img class = "thumbnail" src = "Assets/HomeImprovement/BedroomRefresh/BR4.jpg" data-index = "3">
                <img class = "thumbnail" src = "Assets/HomeImprovement/BedroomRefresh/BR5.jpg" data-index = "4">
                <img class = "thumbnail" src = "Assets/HomeImprovement/BedroomRefresh/Loft1.jpg" data-index = "5">
                <img class = "thumbnail" src = "Assets/HomeImprovement/BedroomRefresh/Loft2.jpg" data-index = "6">
                <img class = "thumbnail" src = "Assets/HomeImprovement/BedroomRefresh/Vinyl1.jpg" data-index = "7">
                <img class = "thumbnail" src = "Assets/HomeImprovement/BedroomRefresh/Shelf.jpg" data-index = "8">

            </div>

        </div>

    </div>

    <div class="project-notes">
    
        <h1>Bedroom Refresh</h1>
        <p>My room was Scooby-Doo themed for nearly two decades. As much as I still love Scooby-Doo (and I really doo), I figured it was time
        for a bit of an update. While I had learned some basic components of home improvement individually, I wanted to make sure all the elements
        I created in this space were cohesive and intentional. Starting this refresh at the beginning of winter and missing the outdoors, I found
        my inspiration.
        </p>

        <p>I approached the room with a rustic/natural theme in mind. Beginning with a fresh coat of paint, I primed all walls then spread a nice "spinach
        dip" green to each corner. From a functional perspective, I was looking to maximize the space for both storage and pastimes in my room, so
        floor space was critical.
        </p>
    
        <p>The first step in fulfilling this need was revamping clothing storage. A big, bulky dresser was my old solution for everything that wasn't
        on hangers, but this was proving to take up a lot of vertical space along with an awkward footprint. My solution to this aspect was a custom
        clothing shelf made from a 2x12 and steel pipes. Adhering to the rustic idea, this wood/metal comboination incorporated a deep walnut stain
        with dark accents, blending well with the green base. Aside from a visual piece, this stores half of my wardrobe efficiently, providing just
        enough vertical space for everything from socks to sweaters and pants to towels. 
        </p>
    
        <p>Once the clothing storage was solved, I realized the largest offender of space was my bed. I didn't feel like downsizing from a queen size
        matress, so I once again took the the idea of optimizing space vertically. With nothing more than shoeboxes fitting under the bed prior, I
        started planning to loft my bed to reclaim a quarter of the floor space in my room. With four 4x4s, a few 2x6s, just over a sheet of plywood,
        and a fair amount of planning, I designed, cut, and assembled a custom loft setup. 
        </p>

        <p>At this point, I had figured out just about everything I had in mind for storage—both items and clothes. While a desk was on the list of
        wants, I don't spend all that much time doing work in my room, so I decided the next step was making the atmoshpere more like home. This
        came together in two mini-projects, both taking the form of shelves. Some shallow shelves filled an awkward space between my window and closet,
        giving room to display some records. Then an overhead shelf filled a lot of the space above eye level to fill out the blank canvas on the
        primary wall. A year or two in the making, I finally got the space I needed to put all the lamps I've made.
        (And of course I had to match the walnut/olive/iron theme.)
        </p>

    </div>
    
</section>
`;


const pages = {
    creators_log: creators_log_content,

    automotive: automotive_content,
        zj_front_end: zj_front_end_content,

    diy: diy_content,
        longboards: longboards_content,
        copper_lamp: copper_lamp_content,
        wooden_lamp: wooden_lamp_content,

    home: home_content,
        bedroom_refresh: bedroom_refresh_content
};

function clearActiveStates() {
    navItems.forEach(nav => nav.classList.remove('active'));
    dropdownItems.forEach(drop => drop.classList.remove('active'));
}

navItems.forEach(nav => {

    const label = nav.querySelector('.nav-label') || nav;

    label.addEventListener('click', (e) => {
        e.preventDefault();
        clearActiveStates();
        nav.classList.add('active');
        switchPage(nav.dataset.page);
    });

});

dropdownMenus.forEach(menu => {

    const rect = menu.getBoundingClientRect();

    if (rect.right > window.innerWidth) {
        menu.style.right = "0";
        menu.style.left = "auto";
    }

});

dropdownItems.forEach(item => {

    item.addEventListener('click', (e) => {
        e.preventDefault();
        clearActiveStates();
        item.classList.add('active');
        switchPage(item.dataset.page);
    });

});

content.addEventListener('scroll', () => {

    content.style.setProperty('--scroll-opacity', '1');
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
        content.style.setProperty('--scroll-opacity', '0');
    }, 1500);

});

function switchPage(page) {

    //stopAutoScroll();

    content.classList.add("fade-out");

    setTimeout(() => {
        content.innerHTML = pages[page];
        content.offsetHeight;
        content.classList.remove("fade-out");
        
        const image_gallery = content.querySelector('.lower-media-strip');
        const appendix = content.querySelectorAll('.project-summary');
        console.log(image_gallery);
        if (image_gallery) { initImageGallery(image_gallery) };
        if (appendix) { initAppendix(appendix) };

    }, 300);

}

function setActiveParent(parentLi) {
    
    document.querySelectorAll('.nav-item').forEach(nav => {
        nav.classList.remove('active');
    });
    parentLi.classList.add('active');

    document.querySelectorAll('.dropdown-item').forEach(item => {
        item.classList.remove('active');
    });

}

function setActiveDropdown(item) {
    
    document.querySelectorAll('.dropdown-item').forEach(i => i.classList.remove('active'));

    document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'));
    item.classList.add('active');

}

window.addEventListener("scroll", () => {

    const headerBottom = heroHeader.getBoundingClientRect().bottom;

    if (headerBottom <= 0) {
        navLogo.style.opacity = "1";
    } else {
        navLogo.style.opacity = "0";
    }

});

function initAppendix (appendix) {

    appendix.forEach(item => {

        item.addEventListener('click', (e) => {
            e.preventDefault();
            clearActiveStates();
            const dropdown = document.querySelector(
                `.dropdown-item[data-page="${item.dataset.page}"]`
            );

            dropdown?.classList.add('active');
            const parentNav = document.querySelector(
                `.nav-item[data-page="${item.dataset.parent}"]`
            );
            parentNav?.classList.add('active');

            switchPage(item.dataset.page);
        });

    });

}

function initImageGallery(container) {
    const activeImage = container.closest('.project-media')
        ?.querySelector('#active_image');
    const thumbnails = container.querySelectorAll('.thumbnail');
    const autoPlayButton = container.querySelector('.auto-play');
    const autoPlayIcon = container.querySelector('.icon');
    console.log(autoPlayButton);
    console.log(autoPlayIcon);

    let autoScrollEnabled = true;
    let autoScrollInterval = null;

    function setActiveThumbnail(index) {

        thumbnails.forEach(t => t.classList.remove('active'));
        thumbnails[index].classList.add('active');

        thumbnails[index].scrollIntoView({
            behavior: 'smooth',
            inline: 'center',
            block: 'nearest'
        });

    }

    function setActiveImage(src, index) {

        activeImage.classList.add('fade-out');

        setTimeout(() => {

            activeImage.src = src;
            requestAnimationFrame(() => {
                activeImage.classList.remove('fade-out');
            });

            setActiveThumbnail(index);

        }, 200);

    }

    function startAutoScroll() {

        if (globalGalleryInterval) return;

        clearInterval(globalGalleryInterval);

        console.log("play");
        autoScrollEnabled = true;
        autoPlayIcon.textContent = "■";

        let index = 0;

        globalGalleryInterval = setInterval(() => {

            if (!autoScrollEnabled) return;
            index = (index + 1) % thumbnails.length;
            setActiveImage(thumbnails[index].src, index);

            thumbnails[index].scrollIntoView({
                behavior: 'smooth',
                inline: 'center',
                block: 'nearest'
            });
              
        }, 3000);

    }

    function stopAutoScroll() {

        console.log("stop");
        autoScrollEnabled = false;
        autoPlayIcon.textContent = "▶";

        if (globalGalleryInterval) {
            clearInterval(globalGalleryInterval);
            globalGalleryInterval = null;
        }

    }


    thumbnails.forEach((thumb, index) => {
        
        thumb.addEventListener('click', () => {
            stopAutoScroll();
            autoPlayIcon.textContent = "▶";
            console.log("thumbnail ", index);
            setActiveImage(thumb.src, index);
        });

        thumb.addEventListener('mouseenter', () => {
            autoScrollEnabled = false;
        });

        thumb.addEventListener('mouseleave', () => {
            autoScrollEnabled = true;
        });

    });

    autoPlayButton?.addEventListener('click', () => {
        autoScrollEnabled ? stopAutoScroll() : startAutoScroll();
    });

    startAutoScroll();

}
  