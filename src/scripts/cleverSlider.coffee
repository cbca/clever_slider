class CleverSlider

  constructor: (options)->
    slider = document.getElementById(options.id)
    # считаем количество слайдов
    @itemsCount = slider.children.length

  # добавление слайдов, пока поддерживается только вставка в конец списка
  @addItem: ()->
    @itemsCount += 1

  # перейти к слайду с номером index
  @goToSlide: (index)->
    @currentIndex = index


class CleverSliderItem

  constructor: (options)->
    @sliderId = options.sliderId
    @width    = options.itemWidth

class Singleton

  constructor: (@name) ->

firstSlider = new CleverSlider({ id: 'slider' })
console.log firstSlider.itemsCount
