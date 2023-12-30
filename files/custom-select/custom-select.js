document.addEventListener('DOMContentLoaded', function () {
    const customSelectDefaults = document.querySelectorAll('.js-custom-select');

    customSelectDefaults.forEach(function (customSelectDefault) {
        const selectedContainer = customSelectDefault.querySelector('.custom-select__selected');
        const body = customSelectDefault.querySelector('.custom-select__body');
        const listItems = customSelectDefault.querySelectorAll('.custom-select__list-item');
        const valueField = customSelectDefault.querySelector('.custom-select__value');

        function toggleClass(element, className) {
            element.classList.toggle(className);
        }

        function updateSelected(item) {
            const tagName = item.textContent.trim();

            // Создаем элемент с именем
            const tagElement = document.createElement('p');
            tagElement.className = 'custom-select__tag-selected';
            tagElement.textContent = tagName;

            // Добавляем элемент в контейнер
            selectedContainer.innerHTML = ''; // Очищаем контейнер перед добавлением нового элемента
            selectedContainer.appendChild(tagElement);

            // Добавляем выбранное значение в атрибут value
            valueField.value = tagName;

            toggleClass(selectedContainer, 'elements-are-present');
        }

        customSelectDefault.addEventListener('click', function (event) {
            const target = event.target;

            if (target.classList.contains('custom-select__list-item')) {
                listItems.forEach(function (item) {
                    if (item !== target) {
                        item.classList.remove('selected');
                    }
                });
                toggleClass(target, 'selected');
                updateSelected(target);
                customSelectDefault.classList.remove('custom-select-open');
            } else if (target.classList.contains('custom-select-default') || target.classList.contains('custom-select__selected')) {
                toggleClass(customSelectDefault, 'custom-select-open');
            }
        });

        document.addEventListener('click', function (event) {
            const target = event.target;

            if (!customSelectDefault.contains(target)) {
                customSelectDefault.classList.remove('custom-select-open');
            }
        });
    });
});

// Filter for Catalog
document.addEventListener('DOMContentLoaded', function () {
    const customSelects = document.querySelectorAll('.js-custom-select');
    const noResultMessage = document.querySelector('.filter-catalog-no-result');
    const filterResult = document.querySelector('.catalog-filter__filter-result');
    const selectedValues = {};

    customSelects.forEach(function (customSelect) {
        const listItems = customSelect.querySelectorAll('.custom-select__list-item');
        const valueField = customSelect.querySelector('.custom-select__value');
        const filterType = customSelect.getAttribute('data-filter-type');

        function handleListItemClick() {
            const selectedValue = this.textContent.trim();
            valueField.value = selectedValue;

            const truckBlocks = document.querySelectorAll('.truck-block');
            let foundMatch = false;

            truckBlocks.forEach(function (truckBlock) {
                const dataValue = truckBlock.getAttribute(`data-${filterType}`);
                if (dataValue === selectedValue || selectedValue === 'All') {
                    truckBlock.style.display = 'block';
                    foundMatch = true;
                } else {
                    truckBlock.style.display = 'none';
                }
            });

            // Показываем сообщение, если нет совпадений
            if (!foundMatch) {
                noResultMessage.classList.remove('hidden');
            } else {
                noResultMessage.classList.add('hidden');
                updateSelectedFilter(selectedValue, filterType);
            }
        }

        listItems.forEach(function (listItem) {
            listItem.addEventListener('click', handleListItemClick);
        });
    });

    function updateSelectedFilter(selectedValue, filterType) {
        // Заменяем значение в selectedValues
        selectedValues[filterType] = selectedValue;

        // Проверяем, есть ли уже такое значение в filterResult
        const existingItem = filterResult.querySelector(`.catalog-filter__selected-filter[data-filter-type="${filterType}"]`);
        if (existingItem) {
            // Если значение уже существует, заменяем его
            existingItem.textContent = selectedValue;
        } else {
            // Если значения нет, создаем новый элемент
            const selectedFilterItem = document.createElement('div');
            selectedFilterItem.classList.add('catalog-filter__selected-filter');
            selectedFilterItem.textContent = selectedValue;
            selectedFilterItem.setAttribute('data-filter-type', filterType);

            const deleteIcon = document.createElement('div');
            deleteIcon.classList.add('catalog-filter__selected-filter-delete');
            deleteIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.26213 3.99999L0.787257 6.47487L1.49436 7.18197L3.96924 4.7071L6.44411 7.18197L7.15122 6.47487L4.67635 3.99999L7.15122 1.52512L6.44411 0.818013L3.96924 3.29289L1.49437 0.818013L0.787258 1.52512L3.26213 3.99999Z" fill="#D01F1F"/> </svg>';

            // Добавляем элементы в блок catalog-filter__filter-result
            selectedFilterItem.appendChild(deleteIcon);
            filterResult.appendChild(selectedFilterItem);

            // Присоединяем обработчик клика для удаления выбранного значения
            deleteIcon.addEventListener('click', function () {
                filterResult.removeChild(selectedFilterItem);
                delete selectedValues[filterType];
                updateTruckBlocks();
            });
        }
    }

    function updateTruckBlocks() {
        if (Object.keys(selectedValues).length === 0) {
            // Если ничего не выбрано, показываем все блоки
            document.querySelectorAll('.truck-block').forEach(function (truckBlock) {
                truckBlock.style.display = 'block';
            });
        } else {
            // Фильтруем блоки в соответствии с выбранными значениями
            document.querySelectorAll('.truck-block').forEach(function (truckBlock) {
                let shouldDisplay = true;

                Object.keys(selectedValues).forEach(function (filterType) {
                    const dataValue = truckBlock.getAttribute(`data-${filterType}`);
                    if (dataValue !== selectedValues[filterType] && selectedValues[filterType] !== 'All') {
                        shouldDisplay = false;
                    }
                });

                truckBlock.style.display = shouldDisplay ? 'block' : 'none';
            });
        }
    }
});