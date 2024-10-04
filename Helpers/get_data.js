// ************************** SHEIN *******************************
let tables = document.getElementsByClassName(
    // 'c-order-detail-table new-order-table'
    'new-order-table'
);

let items = []

for (let i = 0; i < tables.length; i++) {
    let table = tables[i];
    let body = table.children[1]; // 0 is thead and 1 is tbody
    let rows = body.children;

    for (let j = 0; j < rows.length; j++) {
        console.log(0);
        let row = rows[j];
        let name = row.children[0].children[0].children[1].children[0].getAttribute('content');
        
        let size;

        try {
            size = row.children[0].children[0].children[1].children[1].children[0].children[1].textContent;
        } catch (error) {
            size = row.children[0].children[0].children[1].children[1].children[0].textContent
        }

        
        let sku = row.children[2].textContent
        let price = row.children[3].children[0].children[1].textContent

        if (price == '')
        {
            price = row.children[3].children[0].children[0].textContent
        }
        let link = rows[j].children[0].children[0].children[1].children[0].children[0].children[0].attributes.href.textContent

        items.push([sku, name, size, price, link])
        
    }
}

console.table(items)


// ************************** FASHION NOVA *******************************
let rows = document.getElementsByClassName('account-order__line-item');
let itemsFn = []

for (let j = 0; j < rows.length; j++) {
    let row = rows[j];
    let name = row.children[1].children[0].textContent;
    let size = row.children[1].children[1].textContent;
    let price = row.children[2].children[0].children[0].textContent
    let link = rows[j].children[0].attributes.href.textContent
    let qty = ''

    try {
        qty =  row.children[2].children[2].textContent
    } catch (error) {
        qty =  row.children[2].children[1].textContent
    }
    

    itemsFn.push([name, size, qty, price, link])
    
}
console.table(itemsFn)



