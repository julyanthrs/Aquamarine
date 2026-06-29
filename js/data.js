/* ============ FACILITY OVERVIEW DATA (the 5 primary cards) ============ */
const FACILITIES = {
  'event-venues': {
    name:'Event Venues', tag:'/event-venues',
    img:'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1200',
    desc:'Five tastefully crafted venues for weddings, debuts, corporate events, and everything between — adjustable from 50 to 300 guests, each with its own basic package and add-ons.',
    items:[
      {key:'mainhall', name:'Main Hall', meta:'300 pax · ₱50,000', img:'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=300'},
      {key:'pavilion', name:'Pavilion', meta:'150 pax · ₱50,000', img:'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=300'},
      {key:'annex', name:'Annex Hall', meta:'100 pax · ₱35,000', img:'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?q=80&w=300'},
      {key:'garden', name:'Aquamarine Garden', meta:'100 pax · ₱45,000', img:'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=300'},
      {key:'patricks', name:"Patrick's Place", meta:'50 pax · ₱25,000', img:'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=300'},
    ]
  },
  hotel: {
    name:'Hotel', tag:'/hotel',
    img:'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1200',
    desc:'A top choice for comfort along Batangas — rooms and suites built for leisure travelers, business stays, and romantic getaways alike, with full restaurant, bar, and pool access included.',
    items:[
      {key:'suite', name:'The Suite', meta:'50 m² · Pool access', img:'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=300'},
      {key:'deluxe', name:'The Deluxe', meta:'25 m² · Pool access', img:'https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=300'},
    ]
  },
  restaurant: {
    name:'Restaurant', tag:'/restaurant',
    img:'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1200',
    desc:"Ristorante D'Aby runs Aurelio's full menu — starters, soups, salads, pasta, seafood, steaks, platters, and a dedicated kid's menu — open to hotel guests and walk-ins alike.",
    items:[
      {key:'dining', name:'Full Menu', meta:'Starters to dessert', img:'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=300'},
    ]
  },
  ktv: {
    name:'KTV', tag:'/ktv',
    img:'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?q=80&w=1200',
    desc:'Singing and bonding is at the heart of every Filipino get-together. Four room tiers, sized from a small barkada to a 25-person celebration.',
    items:[
      {key:'absolute', name:'Absolute Room', meta:'5 pax', img:'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?q=80&w=300'},
      {key:'premier', name:'Premier Room', meta:'10 pax · 2 rooms', img:'https://images.unsplash.com/photo-1598387993441-a364f854c3e1?q=80&w=300'},
      {key:'vip', name:'VIP Room', meta:'15 pax', img:'https://images.unsplash.com/photo-1598387993441-a364f854c3e1?q=80&w=301'},
      {key:'presidential', name:'Presidential Room', meta:'25 pax', img:'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?q=80&w=301'},
    ]
  },
  sports: {
    name:'Sports Complex', tag:'/sports',
    img:'https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=1200',
    desc:'The go-to venue for sports enthusiasts in Batangas — well-groomed courts across four disciplines, for athletes of every level.',
    items:[
      {key:'basketball', name:'Basketball', meta:'Full court', img:'https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=300'},
      {key:'volleyball', name:'Volleyball', meta:'Indoor court', img:'https://images.unsplash.com/photo-1592656094267-764a45160876?q=80&w=300'},
      {key:'badminton', name:'Badminton', meta:'Indoor court', img:'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?q=80&w=300'},
      {key:'tabletennis', name:'Table Tennis', meta:'Indoor', img:'https://images.unsplash.com/photo-1611251135345-18c56206b863?q=80&w=300'},
    ]
  }
};

/* ============ DETAIL DATA ============ */
const DETAILS = {
  mainhall: {
    cat:'Event Venue', name:'Main Hall',
    img:'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=900',
    desc:"Aquamarine's biggest venue, built for large gatherings and business conferences. The most flexible floor plan of the five halls, able to flex from a seated banquet to a conference layout.",
    meta:[['300','Max Pax'],['₱50,000','Basic Package'],['+₱15,000','LED Wall (Panoramic)']],
    list:['LED Wall, panoramic — ₱15,000','LED Wall, side — ₱10,000','Upgraded lights & sound — ₱10,000','Live feed, not recorded — ₱2,500','Adjustable seated or conference layout','In-house catering packages available'],
    cta:'Reserve the Main Hall', link:'https://docs.google.com/forms/d/e/1FAIpQLSd4n5qygHrcurlqt_pkJX2oOwa1En55zfmwuy20In5CXY7ufw/viewform'
  },
  pavilion: {
    cat:'Event Venue', name:'Pavilion',
    img:'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=900',
    desc:'Built for life celebrations — big weddings and parties that want a proper hall without conference-room energy.',
    meta:[['150','Max Pax'],['₱50,000','Basic Package']],
    list:['LED Wall, panoramic — ₱15,000','LED Wall, side — ₱10,000','Upgraded lights & sound — ₱10,000','Live feed, not recorded — ₱2,500'],
    cta:'Reserve the Pavilion', link:'https://docs.google.com/forms/d/e/1FAIpQLSd4n5qygHrcurlqt_pkJX2oOwa1En55zfmwuy20In5CXY7ufw/viewform'
  },
  annex: {
    cat:'Event Venue', name:'Annex Hall',
    img:'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?q=80&w=900',
    desc:'For a more intimate vibe with under 100 guests. Sized to feel full, not empty, for mid-size celebrations.',
    meta:[['100','Max Pax'],['₱35,000','Basic Package']],
    list:['LED Wall — ₱20,000','Upgraded lights & sound — ₱10,000'],
    cta:'Reserve the Annex Hall', link:'https://docs.google.com/forms/d/e/1FAIpQLSd4n5qygHrcurlqt_pkJX2oOwa1En55zfmwuy20In5CXY7ufw/viewform'
  },
  garden: {
    cat:'Event Venue · Outdoor', name:'Aquamarine Garden',
    img:'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=900',
    desc:'An open-air setting for baptisms, birthdays, debuts, grad balls, weddings, reunions, anniversaries, and conventions.',
    meta:[['100','Max Pax'],['₱45,000','Basic Package']],
    list:['LED Wall — ₱15,000','Upgraded lights & sound — ₱10,000','Live feed, not recorded — ₱2,500','Outdoor garden setting'],
    cta:'Reserve the Garden', link:'https://docs.google.com/forms/d/e/1FAIpQLSd4n5qygHrcurlqt_pkJX2oOwa1En55zfmwuy20In5CXY7ufw/viewform'
  },
  patricks: {
    cat:'Event Venue', name:"Patrick's Place",
    img:'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=900',
    desc:'The smallest and most intimate of the five halls — best suited for small gatherings that don\'t need a big room.',
    meta:[['50','Max Pax'],['₱25,000','Basic Package']],
    list:['LED Wall — ₱15,000','Upgraded lights & sound — ₱5,000'],
    cta:"Reserve Patrick's Place", link:'https://docs.google.com/forms/d/e/1FAIpQLSd4n5qygHrcurlqt_pkJX2oOwa1En55zfmwuy20In5CXY7ufw/viewform'
  },
  suite: {
    cat:'Hotel Room', name:'The Suite',
    img:'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=900',
    desc:"Aquamarine Hotel's top room, designed for travelers who want comfort and a little ceremony around it — a separate living area, a bath tub, and a sofa bed for extra guests.",
    meta:[['50m²','Floor Area'],['2','Smart TVs']],
    list:['1 kingsize bed + 1 mattress, plus sofa bed','Two 45" / 40" Smart LED TVs','Remote-control curtains, bedroom & living room','Bath tub, coffee table & chairs','Electric kettle, mini fridge, make-up table','2 complete sets of towels, bathrobes & slippers','Breakfast for two, complimentary pool access','24-hour concierge & housekeeping'],
    cta:'Book the Suite', link:'https://forms.gle/VZ7BP83piH2pB27e9'
  },
  deluxe: {
    cat:'Hotel Room', name:'The Deluxe',
    img:'https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=900',
    desc:'A fully air-conditioned room built for two double beds — practical for families or friends traveling together without sacrificing the hotel\'s standard amenities.',
    meta:[['25m²','Floor Area'],['1','Smart TV']],
    list:['2 double beds, 2 mattresses','40" Smart LED TV','Electric kettle, mini fridge, make-up table','10 hangers, complete bath toiletries','Breakfast for two, complimentary pool access','Wireless internet across all hotel areas','24-hour concierge & housekeeping'],
    cta:'Book the Deluxe', link:'https://forms.gle/VZ7BP83piH2pB27e9'
  },
  basketball: {
    cat:'Sports Complex', name:'Basketball Court',
    img:'https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=900',
    desc:'A full court kept in playable condition for everything from casual pickup games to barangay leagues.',
    meta:[['Indoor','Court Type']],
    list:['Well-maintained playing surface','Suited to leagues & casual play alike','Coordinate scheduling directly via Messenger'],
    cta:'Reserve a Slot', link:'https://m.me/arcsportscomplex'
  },
  volleyball: {
    cat:'Sports Complex', name:'Volleyball Court',
    img:'https://images.unsplash.com/photo-1592656094267-764a45160876?q=80&w=900',
    desc:'An indoor volleyball court for training sessions, friendly matches, or a standing weekly group.',
    meta:[['Indoor','Court Type']],
    list:['Professional ambiance for all skill levels','Available for recurring weekly bookings'],
    cta:'Reserve a Slot', link:'https://m.me/arcsportscomplex'
  },
  badminton: {
    cat:'Sports Complex', name:'Badminton Court',
    img:'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?q=80&w=900',
    desc:'A dedicated indoor badminton court — popular for weekly league bookings among local groups.',
    meta:[['Indoor','Court Type']],
    list:['Good for beginners through competitive players','Flexible recurring reservations'],
    cta:'Reserve a Slot', link:'https://m.me/arcsportscomplex'
  },
  tabletennis: {
    cat:'Sports Complex', name:'Table Tennis',
    img:'https://images.unsplash.com/photo-1611251135345-18c56206b863?q=80&w=900',
    desc:'A quieter corner of the sports complex for casual games or focused practice.',
    meta:[['Indoor','Court Type']],
    list:['Available alongside other court bookings','Good for quick games between events'],
    cta:'Reserve a Slot', link:'https://m.me/arcsportscomplex'
  },
  absolute: {
    cat:'KTV', name:'Absolute Room',
    img:'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?q=80&w=900',
    desc:'The most compact KTV room — sized for a tight-knit group that just wants to sing.',
    meta:[['5','Max Pax']],
    list:['TJ Media Videoke System','JBL Speakers, 2 wireless microphones','Sanitized with fogging / UV light before & after use'],
    cta:'Book This Room', link:'https://m.me/aquamarineph.KTV'
  },
  premier: {
    cat:'KTV', name:'Premier Room',
    img:'https://images.unsplash.com/photo-1598387993441-a364f854c3e1?q=80&w=900',
    desc:'A mid-size room with two available units — good for a barkada-sized celebration.',
    meta:[['10','Max Pax'],['2','Rooms Available']],
    list:['TJ Media Videoke System','JBL Speakers, 2 wireless microphones','Sanitized with fogging / UV light before & after use'],
    cta:'Book This Room', link:'https://m.me/aquamarineph.KTV'
  },
  vip: {
    cat:'KTV', name:'VIP Room',
    img:'https://images.unsplash.com/photo-1598387993441-a364f854c3e1?q=80&w=900',
    desc:'More room to move, more voices in the mix — built for bigger groups without losing the private-room feel.',
    meta:[['15','Max Pax']],
    list:['TJ Media Videoke System','JBL Speakers, 2 wireless microphones','Sanitized with fogging / UV light before & after use'],
    cta:'Book This Room', link:'https://m.me/aquamarineph.KTV'
  },
  presidential: {
    cat:'KTV', name:'Presidential Room',
    img:'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?q=80&w=900',
    desc:'The largest KTV room in the building — for the kind of night where everyone wants the mic at once.',
    meta:[['25','Max Pax']],
    list:['TJ Media Videoke System','JBL Speakers, 2 wireless microphones','Sanitized with fogging / UV light before & after use','Also works for intimate corporate events & reunions'],
    cta:'Book This Room', link:'https://m.me/aquamarineph.KTV'
  },
  dining: {
    cat:'Dining', name:"Ristorante D'Aby",
    img:'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=900',
    desc:"Aurelio's in-house restaurant — a full menu spanning starters, pasta, seafood, steaks, platters, and a dedicated kid's menu.",
    meta:[['Full menu','Format'],['Kid-friendly','Note']],
    list:['Starters: gyoza, soups, salads','Mains: pork, chicken, beef, pasta','Seafood & fish, family & fiesta platters','Desserts, frappes, shakes, brewed coffee'],
    cta:'See the Full Menu', link:'https://www.aquamarine.com.ph/dining'
  }
};
