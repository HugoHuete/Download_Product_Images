import urllib.request

from time import sleep
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.edge.options import Options
from selenium.webdriver.remote.webdriver import WebDriver


from Helpers.Helpers import convert_webp_to_png, get_data_from_csv, go_to_url, wait_till_clickable, GetAllElements

def main():
    # Get urls of the items in x Shein order. Convert the data in a dictionery sku:name from the dataframe
    data =  get_data_from_csv()

    edge_options = Options()
    edge_options.add_argument('--log-level=3')
    driver = webdriver.Edge(options=edge_options)
    driver.implicitly_wait(10)
    driver.maximize_window()

    coupon = True
    for sku, name, url in data:
        # Go to url and close coupon dialog
        go_to_url(driver, url)
        if coupon:        
            close_dialogs(driver)
            coupon = False

        sleep(2)
        download_images(driver, name)

    driver.close()
    convert_webp_to_png()


def close_dialogs(driver:WebDriver):   
    try:                                          
        puzzle_close_button = wait_till_clickable(driver, By.CLASS_NAME, 'geetest_close')
        puzzle_close_button.click()
        coupon_close_button = wait_till_clickable(driver, By.XPATH, "//*[contains(@class, 'sui-icon-common__wrap') and contains(@class, 'she-close')]")
        coupon_close_button.click()
    except:
        print('Maybe puzzle appeared a second time')
        puzzle_close_button = wait_till_clickable(driver, By.CLASS_NAME, 'geetest_close')
        puzzle_close_button.click()
        coupon_close_button = wait_till_clickable(driver, By.XPATH, "//*[contains(@class, 'sui-icon-common__wrap') and contains(@class, 'she-close')]")
        coupon_close_button.click()



def download_images(driver:WebDriver, image_name:str):
    # Zoom image 
    try:                 
        driver.find_element(By.XPATH, f' /html/body/div[1]/div[1]/div/div[1]/div/div[2]/div[1]/div/div[1]/div/div[2]/div[1]').click()   
    except:
        try:                              
            # Puzzle can reaper here again but in another location
            input('Puzzle reappeared.')
            # puzzle_close_button = GetAllElements(driver, By.CLASS_NAME, 'geetest_close')
            # puzzle_close_button[1].click()
            driver.find_element(By.XPATH, f' /html/body/div[1]/div[1]/div/div[1]/div/div[2]/div[1]/div/div[1]/div/div[2]/div[1]').click()
        except Exception as err:
            print(err)
            input("Revisar")
            pass  

    # miniatures = GetAllElements(driver, By.CLASS_NAME, 'productimg-extend__thumbnails-item')
                      
    possible_div_numbers = [14, 16, 15, 17, 18,19]
    for div_number in possible_div_numbers:                                           
        miniatures = driver.find_elements(By.XPATH, f'/html/body/div[{div_number}]/div/div/div[2]/div/div[1]/ul/li')
        if len(miniatures) > 0:
            break
    
    if len(miniatures) == 0:
        input('*****************Revisar que paso*****************')

    print(image_name + "\t div_number:" + str(div_number))

    # Hover over miniatures to load all images
    counter = 0
    for miniature in miniatures:
        hover = ActionChains(driver).move_to_element(miniature)
        hover.perform()                                  
        full_image_url = driver.find_element(By.XPATH, f'/html/body/div[{div_number}]/div/div/div[2]/div/div[2]/div[1]/img').get_attribute("src")
        full_name = 'images\\' + image_name +' (' + str(counter) + ').webp'

        urllib.request.urlretrieve(full_image_url, full_name)
        counter += 1

        sleep(1)                                   





if __name__ == '__main__':
    main()



