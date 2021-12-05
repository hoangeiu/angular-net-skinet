using API.Dtos;
using AutoMapper;
using Core.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Helpers
{
    public class ProductUrlResolver : IValueResolver<Product, ProductToReturnDto, string>
    {
        private readonly IConfiguration _config;
        private readonly IHttpContextAccessor _httpContextAccessor;

        public ProductUrlResolver(IConfiguration config, IHttpContextAccessor httpContextAccessor)
        {
            _config = config;
            _httpContextAccessor = httpContextAccessor;
        }

        public string Resolve(Product source, ProductToReturnDto destination, string destMember, ResolutionContext context)
        {
            var currentSchema = _httpContextAccessor.HttpContext.Request.Scheme;
            var currentUrl = _httpContextAccessor.HttpContext.Request.Host.Value;

            if (!string.IsNullOrEmpty(source.PictureUrl))
            {
                //return _config["ApiUrl"] + source.PictureUrl;
                return currentSchema + "://" + currentUrl + _config["ImageUrl"] + source.PictureUrl;

            }

            return null;
        }
    }
}
