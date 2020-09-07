import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

import "./CharDisplay.css";

class CharDisplay extends React.Component{
    render(){
        return(
            
          <div className="charInfo-container">
          <div className="charLeft">
            <div className="charImg">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAkFBMVEX///8AAADz8/P09PT+/v79/f319fX8/Pz39/f29vb6+vr7+/v4+Pj5+fkEBAQEBAXg4ODp6emQkJDFxcVLS0tSUlK6uroSEhKIiIizs7PPz89aWlowMDCioqKXl5eoqKhtbW11dXUfHx86OjomJiZlZWXj4+NEREQYGBh+fn6UlJQ9PT2Li4vX19fKysoqKioI3syjAAAW3ElEQVR4nNVdh5abOhAFTC8bY9x72ZLd2Mn//90DJKFRA4GxzeOcZO1diZmLyoxmroRhoMu2hQ+G6sPjy/Z7u/LyIvTV9rzqA/qLE1UfHFVZoYisrKEoS4q0KdtGTXSFMfq1nSTo104S4nJxhD5EsdehbNJYltzOIEWqsh4p2000uW95xQH6te0H6NdO4KNbREGC5QehUBZLCWKDLxuRslgjcjuPlA3p7XBZQbSsrCBaVDPiypZ3jUfo17Y7QlK8kYtqhpaPK1j4FsEI1xyNsCJWgG9OyvoW1sjFZR1SNqJlY7ZsJdohoiOJ6A5qln02xLhzpZtrWnxZyzXYshSg1QagqmxMyoqiR7xoUc2y83q459LHaPUK0KZKu0qAyochAnSpaLWaWHQQ26QdC0UsAWDA1XQpQNJFK6U7tGBAAXKiI0E0fba0rKEASJ9teTtsNWCrtG/BTgAlXVQEqOyizWpWormaGp37fzIGSVkspbmL9jMGw1HCA6xEa4xBUU3lGGQBqpXuZwwaoV1MaX5gpanrBn7sJdhuGa3GoI6a3LPFj+YeM1ED0C3+Yqfj9W55Om4u54WJrsX5Mjt+Lw/rcUoedMsuqq2mU/yw/cfYwXyyvmWTzYXgkl2Ly2aS3YraQT8AuS7qhE7h5AWPGIPO3/0XwfGGf/wiH97eWKDTfeY1AuwwBj2/tPhJ4/zbagzmf0nG+ylV/43HBT4wKMeh4ccaz7ZJzarHe27xFxuvQ3oyE4nj/j1tYcNpACQftqcsUbVgJ2tWFsEWvydXzclOZ7n2GgCL63xaF/dVuWqtuihRk9RUPZoWXTS98j2zDcDqL5OxzT/bNq4aryb5dreZiLIPYeh1AphfH+XE08VVA2UDCPD+MZgctrSr3QUQfdgeEnt01xjEZctH4ozuMxOR4U4WsnHVHWB+La4WEt3FVavULC2+E9xlJlzDmkiV7gawspn5v4nV0VWrumhUuIt24t8xi8ahtZcrLR1g3FX3DIoPb3vLu2vR4xfQvbB921dlvXj3uwFgeZ1nx+V1fzis5vP56rDbTZbH2RkAVSL9vTOI6PZqJm4xBdok+lY3BrkuWkmxs60KF/6wmC5X63JA2dhkGiG+v+F/rlfXKXBbJUjzOSc3kHVjUG0mqqWo8tE0jsHxhwIXbrdrlhpkkSZb0aO/fM6Xs9+qpiz+/0gNtbMtumpC8K8ZoKqL7vjhBABOJ2XLRRorejcXZK0n1JMVJ6RdeIea+Ft7M5HSpQMPcHZIyWPkABrqFX34uZopAJrmV6oC2DhVKB5NXedGZfemAuBsFTgRB1Arqlb4DRik5L67dmai6qI2ktLaVUtnYPEAFNn+fBrG6J6o2u2qmLxmaaLvqlUAveIPXtC6c8/fTElXMmdZVB9V0wj8urmDO5OO7be5oGZjFw0LU+jESVuA36YM4PHGKN2ui7LLpdtR6KvFz29NgFULxqXFj0i2RtdVs/7IAB5TVmmt5ItqfssN0YkHWHz4ssQxWGMm/GKariy+dguuf0tmu9PNaAbYJvCLMfIW8vw31J0qwATeDuBKMp1PbyQ/2WvyZVyZSODaHkjZxjGoANjURa8iwH+ZFz8k+WJE838swLdf+YIDqdlkzTRaUFrzKAL8ccKHJV8MY8IALD+cJMmXmjytEqCs7ZONAHA6NtyHJl9uUyFst7GEnK66i9pIIz2A3hdcoZY/c0+jOQFa46ppJF8c4j3RwfgVawMss6NVmr9hDFpbvgUvY5hd6mcMCkqPjPGFHYxv5tZi1VR20ZKr4cRhk5SyZnrhAS4dnfxgDWFBNzfhLYVnm9a5apVov6ScEKpNQxe1BIBzzQRoCzOhTL7MeTf4YvnNXdR1y8yTowXQ47vov/H9OXr95Itxe2dNMOqoRq2ZqJJg+FvtGEy+OICbsDNPplMC1Ak3DMA38ytEZdV0HgZggxSbNxPfxvNz9N8QYPGQhXboDlAw9HtDlqPvhyejDjrxi+6TVp6WB6jlqq2kSj+cJ2McGICmefUauyjHa1O46SvO0M/rAT6OJ1NMqXAwEje8BmCIeG31bvqaa8H2APvjyczZ2cZcM2VFgCyvTQHQ4taDmVE7BiVdtE+eDDWMpTK/rVq+ksvy2hTrkD+tWrAnV00ZVSuGDByMX7WErEDBa2OkfLeaZO511VQAaVlnxc42357o5/N8pVqAczYmw5mJXlw1Lb4SGEl7draZ3wcwfTN/6Rv6e82EZvKFDfUtUj2AiljAjGnBTT3AR5kJIfmyYdbEMy2AipG+ZwD+0/ZFH0untK13ALBYhqsBcrw2IfnCrlnGWq7afSt6reRLMkZKkQH0GfB2sAKIeW2qcNUXA7B+PXjXGGydo5+bwA3JTQZblgaoMK9NBZDNDy5fSmnmV/RLxogd5AAjltcmPMYxA/CiFbLouqLnRDfnJpwLM9ukUoAMr02So2dT2OPeV/T38WRuJgBoHuuo5WxNmnjLGIC7p67oNZIveAyRvroONQFSKTGTqJzqeTIPNhNsO0zhbLONWwL0wx3j/o01Ar8P2/miaO0bw0o5kLKc6PKrI3RR37UYItCP8ThXjXu2LagEE+iP/Halz9ZDvDYxFmAwVK5/TqvcxGNcNUlU7R1OFXsZQMxrI/v8ANvQggDNrFV26cFjkKoZz+FIerPEjoZ4bRHPximUZtiGU28IrposqjaFak4iQU2G18ZEc1xY07z1nAC9h07JBp3GUE0T05SAmiRIJ9acwJqn6DEr+i6UZj6qdoJxqR+FmqwURGmGjF9Tg4TQR/KldRctrsqzLNfCoS7AIvJKAZ5UALslX+7ZViDGRe0jBViGT/UARltIBOqTJ6M3BvVz9G7wCafTrecJatpII7ZmBjv3sRngM101FmDe2kfGrMW8miyvjdT8gEHXMVJ6KK4aD7Dw3WiDfPCkSJbXVu18gaN3wyg9AFdNiMnMxCFVqRn7ZZY74mpOAMAyhv/CTcoaCdAM9rgfVk23KEKy3HRzFgS4baBTPt9VE5IvVrXMK5CyahIeIFMzYVa+Py9IvrQDOPImcDpdi2ryNZ0TrPA5QFcNls07j/EJ9DW/jSaAbgD3D84ey5PRfBhNm8UhpfhscfOmUNP4C5/Iyhiiq8bHb1bQBcu4sjbSHtQ8QQvqC6T0nnkyMoC6ZqJ6tglc63+zamJeG6iZbAHAjdPJVXvQil6dfCFbGIrpdBtCNWPEa4tATWbFdeBdhKG4aqzo+ADtxRioWZ7eUvHaUM29ZEkpW9H3yZPpaCZoZNsCAEEmymZ5bbjmFACccgCfmHxp0YKFaBg6nUa8mkxNB1AdEKP6dckXfYCFo0kzUbTzsMQ99O0vdPJuCoBPSr40m4lK9A3kvc2/dQApdSyvcLaMe83Eg1w14dlaZ3r2hrljRHM17S8KsMyP15iJl7pqfG4C2ospVJPw2giFKIDT7mTwZqJ6GOESKg7V5Hht/o22YOH/PJcnwwDUMhNVa+NU4BtJdVZqIl5bQryTkZEBgGYa9WIm+l3RK9KYKQBoZgkRzfDaypowmL8wHm0m7nLVuEXPAtiLa0ggQV4bqgnJzlOeMDaEFb0yET0FBnFjsGWJlKI9L8BnW9qClAGs6FU5oiswiBdWTQg3XYByK6LIoFb0qhTKClB/SqZbpSZTcww5UGtOyquSL1oAQya6NAZThc08xjXkqFhQyoBW9NLgn5tCO7emABGvLSAddmdSgCZS5OEr+nsMPRQN7dzBIKI95vSWiPEMzobMVXtB8kUHYF72TAGay4ioyfDaIss+Ac9gNnhXjTXXM5jTxUw2ltdWzL9H4Bkch5N8MerMBCl7BEv3o4HLIl4b+RaUBr8ynEt78K4aFo3KLsHSfcOWpd+8C+P6DCf5orM5AB4V96cMIZLbgZrxGbg+e4MHODxXDUwVEd0tbJrvidiCpRR/QYn5hCc2aFcNWLPkQAGaC5/jtZF+EkCXZiVXelCuGjDXeC8N7oJ+dV+W12bRrowRPj750scYLEfSCgA0rRG+HcdrSwHAgrc+dFeNsWbMrrYUF0kYXlsySgFAM3spT6b9eeeZJFgfM6e3JFbiAoB5Gw4p+dJM55mDhZ85YkVXNV0A0FyF/wNXDVgzuEA0XTnAYi6l+1AOyZCSLzV0Hhz4pXuEcwCBHGBhD6nFx+cVDttVo1NFQnjpRQvl9lAK0EjOoC/vsJShJF+Mui7qjKI9bcHCp6lE20gjVNMD+1AQ92bgrho8gnECJpE/TkWejRCvjVgPGv0vtzkNKvnSlCNagllyExHRCeK14Zv70RH4dsfeXbU+V/SGML/BYx+OEaGccLy2Yvtp5RnM/i9mApedgVkSk36NQOC1LYFvdxa5/a9Y0WvQeZBoOEsuWTXJtxDZlOpB+I/YpNy/mSCi4broIAGIpKzruP1DdNWoNUthqHetAghi3iaJeQ/eTODIdhXzLiz+WAWwyFtQe7FqAPjKFb0QeKhIQ6VLkwI1UZabSBldgEGcGFpj8CUremFVZ18pwCL3VKmJ30pWcUs3wCBOh++qVQB9sgOqHGQbKhqf3lJ1O0zxRuUWA+DJ6JgJVHYBXJqJQ9TEvDaH1HRQHp9Mp5/uY8bgI95glgKA5twn7VAWIae3lPMvs3lhHgpKD81Vq8pmkPZ1s1k1Sc1SCmRPXYnSw3XVqrJXANB0pACxlCnwDGYKgC911RShI3AGC6ZUCgDxN3iSZslrG+aKnl/0FGdZVS2zkwEkbe9nFGC58XBIyZeaN3muTdAya6gmsvh+1bkDDwDMbf6wXTWafFkCgMUwpOHbkjxE30qWS4Fs25nkvUtDcNV4gMloCgDOIEDmrWSo5h5Ou2nIAXxp8kUZgHeZYP0OqImy3HgfM5YyhvaiIg0NI/mCyvJjMLbsFRxbxQEXjGiG15brvAWz0qYDwGe6akT0DAC8JC4/VaCaFUfqBAdtaMjNxDBcNSI6BgDNkzPirBn3aFh7sXopT0aXzrOCTmkWc2ryUuLkDJ7IbNCuGhE9AwDPls2qaYs1T/CJjN3hJF9UAD/h9I8DiZU/gnltTNvD40qJ9z1IV42InlB9SXSpEs3x2nBNaC+2EVZ6WCt6KBqcj4D5hlTNCL2VLOGkTGCuMTPuHYOPctWIaHo+AsknUTXx6S1czZCcplG2/eYprlr3LlounGiDYHYwEY1vx9fEB7VJXITnr+ibAZJz20qAH1I1+ZoxidagR3M0HrlJWQqwzkxUoknzMOfmZbKRJAIsxi6YTscGUXpYrhqqNIYAt55GC5Y1D3D+RRZmCMkXSXzagylP8yCxZjbSiAsbJgs4esfGMJIvEoABs1FrEYkA+beSYSn2Fbb9aaBmIhddOmCV/d4bgpohw2ujIYuRBR9N3ogvdNXqWJ/4mCgyokYuL5rltTGtwp7XFg1pRQ/V5M5rE54t91YyGJOxQM3qyOxhuGpAzTkE+JaSnknLYtESgPAU6HzS+acE+DIzUahpv8N2+IkEgJAVJYQN8dmX+BY/LQE+pYuy5+b9ThsA8t3O2wGAxWTz8uSLoCaTRiKvutBtQTufdrdwnprag1nRV6KnEOBWBRDF16TJlzUcxmRzwvN5MkqAOxNOFWteNOS1VW8l46JqH3ApjN3TQbhqpZpjBuCRBUj9VobXxnc7eOb8W3Ge90BctVK0t4UATcXrgjGvzZMD5LYjFlSqYbhqpehvABCToCSTvfytZDS0FX4BgIXdfz5PRsWVYF83M1UAxKI5gFBpZh+/ad4chdLPddUMlryF+6g4ybiNAG08X1WzzXukKvtMV62o+84A3Bl1HqUKIJYC31GCMzUvdtWKa8MA3CgAyluQ7ycpvVXx6fv1rppRzjIAYMFiq/EoEa9N+VayMJxDgIXhf7WZKBcF0KPMald1mNdWl3z5Zmcb7P69zFUDm2NMYsRqVnXsW8kUyRfm3Y54rfjs5AtQGncqAvCrtosG7FvJFMmX8r1r4J7zF7pqAsCzVRt4UL2VjIvJ/GXuWXT8p/FkmgDmDrdG8I8DKEbVogMD0DRXzotcNQHgSmddjqXUJl+YuJRpYo7G85IvdJJhAU70ATYlX04m4+iWq8Wnu2qS95BqBB6wlMbky4adbXLTbz8t+SI39IUvox6vlBVVri78RoCG9cXcvHi/Of7Ls1y1ZMMB/Io8wdkWuih5K1lzAjSImbBNfr2PsdJPWk28m78YgFvH0YhP828lq0u+FO/lZgfjvCvADq4a9/pR07yM1ACpR8m+lawp+ZJeWIDFu9Wd55gJ71sAmGoF/8oihNfWnHwhh5/TprzcDAXA3pIvZdBpywPcjmQAVYse9luND+ST6QZ4qTs5wF7H4M7kO88X7DyNOSICUCNHX8xnEGDxYXp7FE+GRLanAsBNJI5BNfMafdPe+XLiAObXxI8fNwZtJjdBDL3XoovajBQNH4ge5UOOJjDf59oA23XRfAp9FwFOpK2tAlhafCdowZPxmLOzsdjpuC1AjeRLYIyZBGiNs63OEUUMr00zAbr+zQJEPWdsB/24aiQc791OpgjwLFsuqYN/6K1kJX1PAVDa9taXOBhN8/hJyvbhqhljhkZCPnxZ0EtsTmMybyVrw5P5rgYjMBzm8dbbcunGviGUfJDGZOpyRJDX1oYnE3rzhTgY82uWkSDlPa5alM1MGcCFIqrWGPxTAKxLvsRGOpMAzK/t5LMRYH0X/ZxUrhMLcGO1pdTVt2BjZHsHByPUaLZKjJjwWVokX5IccbyambyHZtaH7hvj0wqAGsmXT37JSD/MDlYjQGHv0ihdzeS3K+xRffKlpovaSEoXnkxgH+QAy5/TyS2f9zyiUZOrZq2XcO8SD1CVH6wZg/jZ8ry2lvnB9EMKEH84z5YZys1WhH/eTNhFxDbNrjPKbfnF3S6/jooMr0YXZd9K1oUnsxZWVGC3anEtptdVRg6gIMYuwXmvNDtcpwtYXDZ5cSQEmZqq+DT7VrJOOfowPvxmNfolRXqeHZfX/WG1mmfz1WG3nyyPs7MMFw/wt5Ino0PnQae3eFzNtjyZ0f6trq9ybcpcyrLVzx8l00nDTFRq8jVbJ0CtCdWZqCY0Zc0zUJadpEquWps0JluzC0/GiNKfhUJ7DYCKsov9KBLZhh3U5B9NpwRo/ufDVqfbaQPcHiJDIMR2mirkALvk6L2Must3Acz/fWReYVJUAOu6KD8GbfTrPngyXpx31lLHu8Zgfv0w5+LfNwZZXlsfPJn1d2UEOgE8n7jdZ/exPtm3kvXDkzGs7LTt2EUvpww5tHUA69Tku6gfs7y2fngySbE5bDet+pyuqZztxokTqwLwOit6UU2O19YrTyay/gKU9V0099N360IoCFBxADtaM5Aj7Z9OiTJG2XVzYRxP7lpcNpP5jXAlHrNJDl0PojQbSbECGa8Py9Nx8+edYF28/9kcT8vDepzPmo7PcyW67aXmRfMAe6VTCsmXcrA7ie9baTpyAz9xiL+vY4Lv2hwg1HwsT8YbkYNEW/kYd1gzJa/t4XTKGoBN8WmtMYhF29xbyV5FadYcg/quWqUmy2t75AmxmgD7PnJDfCsZqvnUnS9SpfvaoKPitd0BsAudsqOZUFooBWmob4D6lGadWfQuhwvVJEdjeC5ZVrtkZ6lLvFiX8FADoSyJ1pGwIdroUAwEXDYiZRNS1peUNXBZYlIE0YEoWlSTE41qxtjjdXwsP/JJMA2fQWgk+NyX2rIeKYKlkLIeLUtuR8tyt/NE0b62aCPm1UTfInJWVIjv6ZBotUc+RPidgnbIl/VoWVwkwhnJmrLV7YhoW0N0JzUd+j/4YDu28IEr0qasrIjd4nZtygpq2v8BmERQ7f2DbcgAAAAASUVORK5CYII="
                alt="temp-circle"
              ></img>
            </div>
            <div className="charName">TYWIN</div>
          </div>
          <div className="charRight">
            <div className="stats">
              <div>Attack:</div>
              <div>Crit</div>
              <div>Speed</div>
            </div>
          </div>
        </div>
        )
    }
}

export {CharDisplay}