# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Song.create([
# {title: "In case you didn't know" genre: , title: "Lady" genre:  title: "Don't wanna write this song" genre: }


# ])
country = Genre.create(name: "country")

Song.create(title: "In case you didn't know", genre: country)
Song.create(title: "Lady" ,genre: country)
Song.create(title: "Don't wanna write this song", genre:country)
