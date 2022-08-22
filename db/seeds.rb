# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts "Starting seed"

User.create(username: 'riverkanterman', password_digest: 'harmredux')
User.create(username: 'brooklynmedic', password_digest: 'mutualaid')

#Location Seeds
ThirteenAvenuePharmacy = Location.create(name: "13th Avenue Pharmacy", address: "5211 13th Avenue Brooklyn 11209", phone: "(718) 871-9777)", latitude: '40.63316144897959' , longitude: '-73.99392118367346')
TwentyOneAvenuePharmacy = Location.create(name: "21 Avenue Pharmacy and Medical Supply", address: "8511 21st Avenue Brooklyn 11214", phone: "(718) 449-4949", latitude: '40.603499799999994', longitude: '-73.99550259397196')
AGPharmacy = Location.create(name: "A & G Pharmacy", address: "1216 Neptune Avenue Brooklyn 11224 ", phone: "(718) 996-2277", latitude: '40.57933102020203', longitude: '-73.97987617171717')
AHPharmacy = Location.create(name: "A & H Pharmacy", address: "589 Crescent Street Brooklyn 11208", phone: "(718) 277-0573", latitude: '40.673491291666664', longitude: '-73.86942125')
ABCPharmacy = Location.create(name: "ABC Pharmacy", address: "371 McDonald Avenue Brooklyn 11218 ", phone: "(718) 853-7766", latitude: '40.6449156', longitude: '-73.9796418')
AmiablePharmacy = Location.create(name: "Amiable Pharmacy", address: "1108 Liberty Avenue Brooklyn 11208 ", phone: "(718) 827-7528", latitude: '40.678369950000004', longitude: '-73.86840900000001')
ArchiMedPharmacy = Location.create(name: "Archi Med Pharmacy", address: "6 Bay 50th Street Brooklyn 11214 ", phone: "(718) 333-1215", latitude: '40.58855665', longitude: '-73.98402429626506')
AvenueMPharmacy = Location.create(name: "Avenue M Pharmacy", address: "1206 Avenue M Brooklyn 11230 ", phone: "(718) 376-2836", latitude: '40.6176116', longitude: '-73.9625257')
BayParkPharmacy = Location.create(name: "Bay Park Pharmacy", address: "3355 Neptune Avenue Brooklyn 11224", phone: "(718) 372-2700", latitude: '40.5773617', longitude: '-74.0011892')
BayParkwayPharmacy = Location.create(name: "Bay Parkway Pharmacy", address: "8506 A Bay Parkway Brooklyn 11214", phone: "(718) 745-7119", latitude: '40.6024951', longitude: '-73.9934911')
BayRidgePharmacy = Location.create(name: "Bay Ridge Rx", address: "7119 Fifth Avenue Brooklyn 11209", phone: "(718) 745-7119", latitude: '40.651623', longitude: '-74.00175317725922')
BayridgeRX = Location.create(name: "Bayridge RX", address: "6910 3rd Avenue Brooklyn 11209", phone: "(718) 316-3003", latitude: '40.6354917', longitude: '-74.0263276')
BennettsPharmacy = Location.create(name: "Bennetts Pharmacy", address: "990 Sutter Avenue Brooklyn 11208", phone: "(718) 277-0800", latitude: '40.6711488', longitude: '-73.88216438286418')
BestCarePharmacy = Location.create(name: "Best Care Pharmacy", address: "8510 3rd Avenue Brooklyn 11209", phone: "(718) 680-9855", latitude: '40.6241182', longitude: '-74.03109926334221')
BoboPharmacy = Location.create(name: "Bobo Pharmacy", address: "6903 18th Avenue Brooklyn 11204", phone: "(718) 759-6308", latitude: '40.6166182', longitude: '-73.9925165')
BridgePharmacy = Location.create(name: "Bridge Pharmacy", address: "8912 3rd Avenue Brooklyn 11209", phone: "(718) 836-1400", latitude: '40.6211197', longitude: '-74.03233050315713')
BrightonRX = Location.create(name: "Brighton RX", address: "227 Brighton Beach Avenue Brooklyn 11235", phone: "(718) 332-8428", latitude: '40.5768956', longitude: '-73.96629722016776')
BrookdalePharmacy = Location.create(name: "Brookdale Pharmacy", address: "2568 Linden Boulevard Brooklyn 11208", phone: "(718) 485-0070", latitude: '40.66849191078261', longitude: '-73.86982209279776')
BrookdaleRx = Location.create(name: "Brookdale Rx", address: "1275 Linden Boulevard Brooklyn 11212", phone: "(718) 240-8200", latitude: '40.6550191', longitude: '-73.9125656148628')
CJWellnessPharmacy = Location.create(name: "C & J Wellness Pharmacy", address: "1425 Broadway Brooklyn 11221", phone: "(718) 443-0591", latitude: '40.6886614', longitude: '-73.91990902663935')
CareFastPharmacy = Location.create(name: "Care Fast Pharmacy", address: "3771 Nostrand Avenue Brooklyn 11235", phone: "(718) 975-4464", latitude: '40.592016599999994', longitude: '-73.9399652844657')
CareMaxPharmacy = Location.create(name: "Care Max Pharmacy", address: "6721 Fort Hamilton Parkway Brooklyn 11219", phone: "(718) 833-6700", latitude: '40.62943728571429', longitude: '-74.01084977551021')
CarePlusPharmacy = Location.create(name: "Care Plus Pharmacy", address: "7010 18th Avenue Brooklyn 11204", phone: "(718) 256-4886", latitude: '40.6161165', longitude: '-73.9934384')
CentralAvePharmacy = Location.create(name: "Central Ave Pharmacy", address: "334B Central Avenue Brooklyn 11221", phone: "(718) 942-5855", latitude: '40.702431', longitude: '-73.932792')

#Review.create(user_id: 1, comment: "They had plenty of naloxone in stock and the pharmacist was very friendly.", location_id:'CentralAvePharmacy')
#Review.create(user_id: 1, comment: "Didn't have any naloxone in stock as of 7/21/22.", location_id:'BrightonRX')
#Review.create(user_id: 2, comment: "Had naloxone and gave additional resources/reading material", location_id:'CareFastPharmacy')
#Review.create(user_id: 2, comment: "Did not know what naloxone was, said they never carried it.", location_id:'BestCarePharmacy')

puts "Finished planting seed data!"