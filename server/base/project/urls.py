from .api import ProjectApi, ListApi
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'projects', ProjectApi)
router.register(r'lists', ListApi)
urlpatterns = router.urls
